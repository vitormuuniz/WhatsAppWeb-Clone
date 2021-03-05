import { useEffect, useState } from "react";
import ChatIntro from "../components/ChatIntro";
import ChatWindow from "../components/ChatWindow";
import { Chat } from "../interfaces/Chat";
import { Content } from "./styles";

interface IProps {
  activeChat: Chat;
}
const ContentArea: React.FC<IProps> = ({ activeChat }) => {

  return (
    <Content>{activeChat === null ? <ChatIntro /> : <ChatWindow />}</Content>
  );
}

export default ContentArea;
