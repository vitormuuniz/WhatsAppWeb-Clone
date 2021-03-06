import React from "react";
import { ChatIntro } from "./ChatIntro";
import { ChatWindow } from "./ChatWindow";
import { Content } from "./styles";

interface IProps {
  user: any;
}
const ContentArea: React.FC<IProps> = ({ user }) => {
  return (
    <Content>
      {user === null ? <ChatIntro /> : <ChatWindow activeUser={user} />}
    </Content>
  );
};

export { ContentArea };
