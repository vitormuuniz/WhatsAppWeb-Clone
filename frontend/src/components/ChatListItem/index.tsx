import React from "react";
import { User } from "../../interfaces/User";
import {
  Avatar, 
  Content,
  Line,
  LineContactName,
  LineDate,
  LineLastMsg, Lines
} from "./styles";

interface IProps {
  onClick: any;
  user: User;
  active: boolean;
  key: number;
}

const ChatListItem: React.FC<IProps> = ({ onClick, user, active }) => {
  return (
    <Content
      onClick={onClick}
      active={active}
    >
      <Avatar src={user.avatar} />
      <Lines>
        <Line>
          <LineContactName>{user.name}</LineContactName>
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
