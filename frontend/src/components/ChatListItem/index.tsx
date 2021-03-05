import React from "react";
import { ChatItem } from "../../interfaces/ChatItem";
import {
  Avatar, 
  Content,
  Line,
  LineContactName,
  LineDate,
  LineLastMsg, Lines
} from "./styles";

interface IProps {
  key: number;
  onClick: any;
  chat: ChatItem;
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
