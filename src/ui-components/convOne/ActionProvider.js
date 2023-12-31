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
      let errors = gecResponse.length;
      let prev = gecResponse[0];
      for (let i = 1; i < errors; i++) {
        let cur = gecResponse[i];
        if (cur.word.startsWith("##")) {
          // If current word starts with ## then add to last word
          prev.word = prev.word + cur.word.replace("##", "");
        } else {
          // else add the last word to accumulation and set cur to prev
          const errorType = prev.entity === "B-na" ? "number" : "gender";
          let errStr = `The word ${prev.word} in "${message}" has a ${errorType} mismatch error.`;
          summary.push(errStr);
          prev = cur;
        }
      }
      // Finally add the prev to accumulation
      const errorType = prev.entity === "B-na" ? "number" : "gender";
      let errStr = `The word ${prev.word} in "${message}" has a ${errorType} mismatch error.`;
      summary.push(errStr);
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
      this.addMicroLessonToSummary("You learned how to " + reachedMicroGoal);
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
        this.addMicroLessonToSummary("You learned how to " + reachedMicroGoal);
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
    // Messages for presentation deck.
    // if (message == "My name are Mon.") {
    //   const nextMessage = this.createChatBotMessage(
    //     "I see, you mean \"My name is Mon.\" My name is Lea. How are you doing?");
    //     // "I see, you mean \"My name is Mon\".");
    //   this.updateChatbotState(nextMessage);
    //   return;
    // }
    // if (message == "My name is Mon.") {
    //   const nextMessage = this.createChatBotMessage(
    //     "Nice to meet you Mon. Where are you from?");
    //   this.updateChatbotState(nextMessage);
    //   return;
    // }
    // if (message == "It is cloudy today.") {
    //   const nextMessage = this.createChatBotMessage(
    //     "Interesting",
    //     { widget: 'retryMsg', }
    //   );
    //   this.updateChatbotState(nextMessage);
    //   this.updateChatbotState(this.createChatBotMessage("Hello, my name is Lea. What is your name?"));
    //   return
    // }
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