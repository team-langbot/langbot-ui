// ActionProvider starter code
// import awsconfig from './aws-exports';

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
    const greetingMessage = this.createChatBotMessage("Calling LLM....")
    this.updateChatbotState(greetingMessage)
  };

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
    };

  updateChatbotState(message) {

    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;