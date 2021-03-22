import React, { useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { ChatIntro } from "./ChatIntro";
import { ChatWindow } from "./ChatWindow";
import { StyContentAreaContainer } from "./styles";

const ContentArea = () => {
  const { user, activeChat } = useContext(ApplicationContext);

  return (
    <StyContentAreaContainer>
      {activeChat === null ? (
        <ChatIntro />
      ) : (
        <ChatWindow user={user} activeChat={activeChat} />
      )}
    </StyContentAreaContainer>
  );
};

export { ContentArea };
