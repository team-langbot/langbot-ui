// ActionProvider starter code
import { Amplify, API } from 'aws-amplify'

const getNextFromAPI = async () => {
  const apiName = 'projectLangbotApi'; // replace this with your api name.
  const path = '/text'; //replace this with the path you have configured on your API
  const myInit = {
    body: {"conversationId": 1, "stepNumber": 1, "attemptNumber": 1, "text": "hola"},
    headers: {} // OPTIONAL
  };
  const data = await API.post(apiName, path, myInit)
  return data
  // return "Pending: Call LLM"
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
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }

  // sign a request using Amplify Auth and Signer
  // async function signRequest(url, method, service, region) {
  //   const essentialCredentials = Auth.essentialCredentials(await Auth.currentCredentials());

  //   const params = { method, url };
  //   const credentials = {
  //     secret_key: essentialCredentials.secretAccessKey,
  //     access_key: essentialCredentials.accessKeyId,
  //     session_token: essentialCredentials.sessionToken,
  //   };
  //   // set your region and service here
  //   const serviceInfo = { region, service };
  //   // Signer.sign takes care of all other steps of Signature V4
  //   return Signer.sign(params, credentials, serviceInfo);
  // }

  getNext = () => {
    // callLocalApi();
    // callLanbotApi();
    getNextFromAPI().then((result) => {
      const greetingMessage = this.createChatBotMessage(result);
      this.updateChatbotState(greetingMessage);
    }).catch((error) => {
      console.error("LLM call failed");
      console.error(error);
      const greetingMessage = this.createChatBotMessage("Model called failed. Please try again.");
      this.updateChatbotState(greetingMessage);
    });
  };

  updateChatbotState(message) {

    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;