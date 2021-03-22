import React from "react";
import { ChatIntro } from "./ChatIntro";
import { ChatWindow } from "./ChatWindow";
import { ContentAreaContainer } from "./styles";

interface IProps {
  user: any;
  activeChat: any;
}
const ContentArea: React.FC<IProps> = ({ user, activeChat }) => {
  return (
    <ContentAreaContainer>
      {activeChat === null ? (
        <ChatIntro />
      ) : (
        <ChatWindow user={user} activeChat={activeChat} />
      )}
    </ContentAreaContainer>
  );
};

export { ContentArea };
