// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

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
  widgets: [],
}

export default config