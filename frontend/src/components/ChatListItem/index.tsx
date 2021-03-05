import React from "react";
import { Chat } from "../../interfaces/Chat";
import {
  Content,
  Avatar,
  Lines,
  Line,
  LineContactName,
  LineDate,
  LineLastMsg,
} from "./styles";

interface IProps {
  key: number;
  onClick: any;
  chat: Chat;
  active: boolean;
}

const ChatListItem: React.FC<IProps> = ({ key, onClick, chat, active }) => {
  return (
    <Content
      onClick={onClick}
      active={active}
    >
      <Avatar src={chat.avatar} />
      <Lines>
        <Line>
          <LineContactName>{chat.name}</LineContactName>
          <LineDate>19:00</LineDate>
        </Line>
        <Line>
          <LineLastMsg>
            <p>Opa, tudo bemOpa, tudo bem?</p>
          </LineLastMsg>
        </Line>
      </Lines>
    </Content>
  );
};

export default ChatListItem;
