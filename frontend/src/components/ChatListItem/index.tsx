import React from "react";
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
  key: any;
}

const ChatListItem: React.FC<IProps> = ({ key }) => {
  return (
    <Content>
      <Avatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
      <Lines>
        <Line>
          <LineContactName>Vitor Muniz</LineContactName>
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
