import React from "react";
import { Message } from "../../../../interfaces/Message";
import { User } from "../../../../interfaces/User";
import {
  MessageContent,
  MessageDate,
  MessageLine,
  MessageObject,
} from "./styles";

interface IProps {
  activeUser: User;
  message: Message;
  key: number;
}

const MessageItem: React.FC<IProps> = ({ key, activeUser, message }) => {
  return (
    <MessageLine key={key} sentByContact={activeUser.id === message.idAuthor}>
      <MessageObject sentByContact={activeUser.id === message.idAuthor}>
        <MessageContent>{message.content}</MessageContent>
        <MessageDate>{message.date}</MessageDate>
      </MessageObject>
    </MessageLine>
  );
};

export { MessageItem };
