import React from "react";
import { Message } from "../../../../interfaces/Message";
import { User } from "../../../../interfaces/User";
import {
  StyMessageContent,
  StyMessageDate,
  StyMessageLine,
  StyMessageObject,
} from "./styles";

interface IProps {
  user: User;
  message: Message;
  key: number;
}

const MessageItem: React.FC<IProps> = ({ key, user, message }) => {
  return (
    <StyMessageLine key={key} sentByMe={user.id === message.idAuthor}>
      <StyMessageObject sentByMe={user.id === message.idAuthor}>
        <StyMessageContent>{message.content}</StyMessageContent>
        <StyMessageDate>{message.date}</StyMessageDate>
      </StyMessageObject>
    </StyMessageLine>
  );
};

export { MessageItem };
