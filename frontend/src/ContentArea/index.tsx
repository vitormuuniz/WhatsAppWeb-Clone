import ChatIntro from "../components/ChatIntro";
import ChatWindow from "../components/ChatWindow";
import { Content } from "./styles";

interface IProps {
  user: any;
}
const ContentArea: React.FC<IProps> = ({ user }) => {

  return (
    <Content>{user === null ? <ChatIntro /> : <ChatWindow activeUser={user} />}</Content>
  );
}

export default ContentArea;
