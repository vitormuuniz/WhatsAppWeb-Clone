import React from "react";
import { User } from "../../interfaces/User";
import { ChatIntro } from "./ChatIntro";
import { ChatWindow } from "./ChatWindow";
import { Content } from "./styles";

interface IProps {
  user: any;
  activeChat: any;
}
const ContentArea: React.FC<IProps> = ({ user, activeChat }) => {
  return (
    <Content>
      {activeChat === null ? (
        <ChatIntro />
      ) : (
        <ChatWindow user={user} activeChat={activeChat} />
      )}
    </Content>
  );
};

export { ContentArea };
