// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import SystemMsg from "./components/SystemMsg";

const config = {
  botName: "Casual Acquaintance",
  initialMessages: [createChatBotMessage("Hola, ¿cómo estás?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#904239",
    },
    chatButton: {
      backgroundColor: "#904239",
    },
  },
  widgets: [
    {
      widgetName: "systemMsg",
      widgetFunc: (props) => <SystemMsg {...props} />,
    },
    {
      widgetName: "microCompleteMsg_1",
      widgetFunc: (props) => <SystemMsg {...props} />,
      props: {
        text: "Yaay, you learnt how to say hello and offer a greeting.",
        confetti: true
      }
    },
    {
      widgetName: "microCompleteMsg_4",
      widgetFunc: (props) => <SystemMsg {...props} />,
      props: { text: "Yaay, you learnt how to make plans.", confetti: true},

    },
    {
      widgetName: "microCompleteMsg_5",
      widgetFunc: (props) => <SystemMsg {...props} />,
      props: { text: "Yaay, you learnt how to say goodbye.", confetti: true }
    },
    {
      widgetName: "lessonCompleteMsg",
      widgetFunc: (props) => <SystemMsg {...props} />,
      props: { text: "Congratulations! You successfully completed this lesson.", confetti: true}
    },
    {
      widgetName: "retryMsg",
      widgetFunc: (props) => <SystemMsg {...props} />, props: {text: "We think your response was off-topic. Please retry."}
    },
    {
      widgetName: "lessonAbort",
      widgetFunc: (props) => <SystemMsg {...props} />, props: {text: "We think you were off-topic three times in a row. Ending the conversation."}
    },
    {
      widgetName: "emptyInput",
      widgetFunc: (props) => <SystemMsg {...props} />, props: {text: "Empty input detected."}
    }
  ],
}

export default config