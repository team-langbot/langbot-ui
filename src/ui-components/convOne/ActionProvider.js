// ActionProvider starter code
import { Amplify, API } from 'aws-amplify'

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
    console.log("In constructor");
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

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }

  handleMoveNext(botResponse) {
    let stepNumber = parseInt(sessionStorage.getItem("stepNumber"));
    if (this.microGoals[stepNumber]) {
      // show next text and celebrate
      const greetingMessage = this.createChatBotMessage(
        botResponse.message.text,
        { widget: 'microCompleteMsg_' + stepNumber, }
      );
      this.updateChatbotState(greetingMessage);
    } else {
      // show next text
      const greetingMessage = this.createChatBotMessage(
        botResponse.message.text
      );
      this.updateChatbotState(greetingMessage);
    }
    //Update step id
    sessionStorage.setItem("stepNumber", stepNumber + 1);
  }

  promptForAttempt(botResponse) {
    // increment attempt id and prompt for another attempt.
    let attemptNumber = parseInt(sessionStorage.getItem("attemptNumber"));
    sessionStorage.setItem("attemptNumber", attemptNumber + 1);

    const greetingMessage = this.createChatBotMessage(
      botResponse.message.text,
      { widget: 'retryMsg', }
    );
    this.updateChatbotState(greetingMessage);
  }

  endConversation(botResponse) {
    // TODO show summary modal
    if (botResponse.message.onTopic) {
      const greetingMessage = this.createChatBotMessage(
        botResponse.message.text,
        { widget: "lessonCompleteMsg", }
      );
      this.updateChatbotState(greetingMessage);
    } else {
      const greetingMessage = this.createChatBotMessage(
        botResponse.message.text,
        { widget: "lessonAbort", });
      this.updateChatbotState(greetingMessage);
    }
    sessionStorage.setItem("attemptNumber", 1);
    sessionStorage.setItem("stepNumber", 1);
  }

  getNext = (message) => {
    console.log('conversationId: %d, stepNumber: %d, attemptNumber: %d',
      sessionStorage.getItem("conversationId"), sessionStorage.getItem("stepNumber"), sessionStorage.getItem("attemptNumber"));
    getNextFromAPI(
      parseInt(sessionStorage.getItem("conversationId")),
      parseInt(sessionStorage.getItem("stepNumber")),
      parseInt(sessionStorage.getItem("attemptNumber")),
      message).then((result) => {
      const botResponse = this.createChatBotMessage(result);
      console.log(botResponse);
      /*
        Sample bot response:
        {
            "message":
            {
                "onTopic": true,
                "nextStep": "NextStep.MOVE_TO_NEXT_CONVERSATION_PAIR",
                "text": "Veo, quieres decir 'bienes'. ¿Quieres pasar el rato hoy?",
                "gec_response": "{'result': [{'estoy': 'O'}, {'bienes': 'B-na'}, {',': 'O'}, {'gracias': 'O'}], 'model_response': '[{\"entity\": \"B-na\", \"score\": \"0.42162076\", \"index\": \"2\", \"word\": \"bienes\", \"start\": \"6\", \"end\": \"12\", \"matched\": true}]'}"
            },
            "type": "bot",
            "id": 461453895126,
            "loading": true
        }
      */
      if (botResponse.message.nextStep == "NextStep.MOVE_TO_NEXT_CONVERSATION_PAIR") {
        this.handleMoveNext(botResponse);
      } else if (botResponse.message.nextStep == "NextStep.PROMPT_FOR_ANOTHER_ATTEMPT") {
        this.promptForAttempt(botResponse);
      } else if (botResponse.message.nextStep == "NextStep.END_CONVERSATION") {
        this.endConversation(botResponse);
      } else {
        throw new Error('Invalid next step from model' + botResponse.message.nextStep);
      }
    }).catch((error) => {
      console.error("LLM call failed");
      console.error(error);
      const greetingMessage = this.createChatBotMessage("Model call failed. Please try again.");
      this.updateChatbotState(greetingMessage);
    });
  };

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;