// ActionProvider starter code
import { API } from 'aws-amplify'

const getNextFromAPI = async (conversationId, stepNumber, attemptNumber, message) => {
  const apiName = 'projectLangbotApi';
  const path = '/text';
  const myInit = {
    body: {
      "conversationId": conversationId,
      "stepNumber": stepNumber,
      "attemptNumber": attemptNumber,
      "text": message
    },
    headers: {}
  };
  const data = await API.post(apiName, path, myInit)
  return data
}

class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;

    this.microGoals = {
      1: "say hello and offer a greeting",
      4: "make plans",
      5: "say goodbye"
    }
  }

  addMicroLessonToSummary = (text) => {
    let summary = JSON.parse(sessionStorage.getItem("summary"));
    summary.push(text);
    sessionStorage.setItem("summary", JSON.stringify(summary));
  }

  saveToSummary = (message, botResponse) => {
    let summary = JSON.parse(sessionStorage.getItem("summary"))
    const gecResponse = JSON.parse(botResponse.message.gecResponse);

    if (gecResponse && gecResponse.length > 0) {
      sessionStorage.setItem("atleastOneError", true);
      for (let cur of gecResponse) {
        const errorType = cur.entity === "B-na" ? "number" : "gender";
        let errStr = `The word ${cur.word} in "${message}" has a ${errorType} mismatch error.`;
        summary.push(errStr);
      }
      sessionStorage.setItem("summary", JSON.stringify(summary));
    }
  }

  showSummary = () => {
    if (JSON.parse(sessionStorage.getItem("convEnded"))) {
      const summaryDialog = document.getElementsByClassName("summaryDialog")[0]
      // const summary = JSON.parse(sessionStorage.getItem("summary")).join("<br/>")
      const summary = "<p>" + JSON.parse(sessionStorage.getItem("summary")).join("</p><p>") + "</p>";
      document.getElementsByClassName("summaryPopupText")[0].innerHTML = summary;
      summaryDialog.showModal();
      sessionStorage.setItem("convEnded", false);
      sessionStorage.setItem("summary", JSON.stringify([]));
      sessionStorage.setItem("atleastOneError", false);
    }
  }

  handleMoveNext(botResponse) {
    let stepNumber = parseInt(sessionStorage.getItem("stepNumber"));
    const hasCue = botResponse.message.cue !== null;
    const hasNext = botResponse.message.nextQuestion !== null;
    const reachedMicroGoal = this.microGoals[stepNumber];
    if (reachedMicroGoal) {
      this.addMicroLessonToSummary("Learnt how to " + reachedMicroGoal);
    }

    if (hasCue) {
      // Display cue first
      const nextMessage = this.createChatBotMessage(
        botResponse.message.cue,
        reachedMicroGoal ? { widget: 'microCompleteMsg_' + stepNumber, } : null
      );
      this.updateChatbotState(nextMessage);
    }
    if (hasNext) {
      // Display next first
      const nextMessage = this.createChatBotMessage(
        botResponse.message.nextQuestion,
        reachedMicroGoal && !hasCue ? { widget: 'microCompleteMsg_' + stepNumber, } : null
      );
      this.updateChatbotState(nextMessage);
    }

    //Update step id
    sessionStorage.setItem("stepNumber", stepNumber + 1);

    // Reset attemptNumber
    sessionStorage.setItem("attemptNumber", 1);
  }

  promptForAttempt(botResponse) {
    // increment attempt id and prompt for another attempt.
    let attemptNumber = parseInt(sessionStorage.getItem("attemptNumber"));
    sessionStorage.setItem("attemptNumber", attemptNumber + 1);

    const nextMessage = this.createChatBotMessage(
      botResponse.message.cue,
      { widget: 'retryMsg', }
    );
    this.updateChatbotState(nextMessage);
    this.updateChatbotState(this.createChatBotMessage(botResponse.message.nextQuestion));
}

  endConversation(botResponse) {
    if (botResponse.message.onTopic) {
      let stepNumber = parseInt(sessionStorage.getItem("stepNumber"));
      const reachedMicroGoal = this.microGoals[stepNumber];
      if (reachedMicroGoal) {
        this.addMicroLessonToSummary("Learned how to " + reachedMicroGoal);
      }
      const nextMessage = this.createChatBotMessage(
        botResponse.message.cue,
        { widget: "lessonCompleteMsg", }
      );
      this.updateChatbotState(nextMessage);
    } else {
      const nextMessage = this.createChatBotMessage(
        botResponse.message.cue,
        { widget: "lessonAbort", });
      this.updateChatbotState(nextMessage);
    }
    sessionStorage.setItem("convEnded", true);
    this.showSummary();
    sessionStorage.setItem("attemptNumber", 1);
    sessionStorage.setItem("stepNumber", 1);
  }

  getNext = (message) => {
    if (!message || message.replace(/\s/g, "") === "") {
      const nextMessage = this.createChatBotMessage(
        "Lo siento, no entendí eso.",
        { widget: "emptyInput", });
      this.updateChatbotState(nextMessage);
      return;
    }
    getNextFromAPI(
      parseInt(sessionStorage.getItem("conversationId")),
      parseInt(sessionStorage.getItem("stepNumber")),
      parseInt(sessionStorage.getItem("attemptNumber")),
      message).then((result) => {
        const botResponse = this.createChatBotMessage(result);
        console.log(botResponse);

        // Save for summary
        this.saveToSummary(message, botResponse);
        if (botResponse.message.nextStep === "NextStep.MOVE_TO_NEXT_CONVERSATION_PAIR") {
          this.handleMoveNext(botResponse);
        } else if (botResponse.message.nextStep === "NextStep.PROMPT_FOR_ANOTHER_ATTEMPT") {
          this.promptForAttempt(botResponse);
        } else if (botResponse.message.nextStep === "NextStep.END_CONVERSATION") {
          this.endConversation(botResponse);
        } else {
          throw new Error('Invalid next step from model' + botResponse.message.nextStep);
        }
      }).catch((error) => {
        console.error("LLM call failed");
        console.error(error);
        const nextMessage = this.createChatBotMessage("Model call failed. Please try again.");
        this.updateChatbotState(nextMessage);
      });
  };

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;