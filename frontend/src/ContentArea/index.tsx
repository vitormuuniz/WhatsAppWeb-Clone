import ChatIntro from "../components/ChatIntro";
import ChatWindow from "../components/ChatWindow";
import { ChatItem } from "../interfaces/ChatItem";
import { Content } from "./styles";

interface IProps {
  activeChat: ChatItem;
}
const ContentArea: React.FC<IProps> = ({ activeChat }) => {

  return (
    <Content>{activeChat === null ? <ChatIntro /> : <ChatWindow activeChat={activeChat}/>}</Content>
  );
}

export default ContentArea;
