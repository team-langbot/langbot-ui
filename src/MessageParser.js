// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    } else if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    } else {
      this.actionProvider.getNext()
    }

  }
}

export default MessageParser;
