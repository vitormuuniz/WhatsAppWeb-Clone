import React from "react";
import { Chat } from "../../../../interfaces/Chat";
import { Message } from "../../../../interfaces/Message";
import { User } from "../../../../interfaces/User";
import {
  MessageContent,
  MessageDate,
  MessageLine,
  MessageObject,
} from "./styles";

interface IProps {
  user: User;
  message: Message;
  key: number;
}

const MessageItem: React.FC<IProps> = ({ key, user, message }) => {
  return (
    <MessageLine key={key} sentByMe={user.id === message.idAuthor}>
      <MessageObject sentByMe={user.id === message.idAuthor}>
        <MessageContent>{message.content}</MessageContent>
        <MessageDate>{message.date}</MessageDate>
      </MessageObject>
    </MessageLine>
  );
};

export { MessageItem };
