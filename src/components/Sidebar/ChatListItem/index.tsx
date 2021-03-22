import React, { useEffect, useState } from "react";
import { Chat } from "../../../interfaces/Chat";
import {
  StyAvatar,
  StyChatListItemContainer,
  StyLine,
  StyLineContactName,
  StyLineDate,
  StyLineLastMsg,
  StyLines,
} from "./styles";

interface IProps {
  onClick: any;
  chat: Chat;
  active: boolean;
  key: number;
}

const ChatListItem: React.FC<IProps> = ({ key, onClick, chat, active }) => {
  const [lastMessageDate, setLastMessageDate] = useState<string>("");

  useEffect(() => {
    if (chat.lastMessageDate !== undefined) {
      let { seconds } = chat.lastMessageDate;

      let auxDate: Date = new Date(seconds * 1000);

      let hours: string =
        auxDate.getHours() < 10
          ? "0" + auxDate.getHours().toString()
          : auxDate.getHours().toString();

      let minutes: string =
        auxDate.getMinutes() < 10
          ? "0" + auxDate.getMinutes().toString()
          : auxDate.getMinutes().toString();

      setLastMessageDate(hours + ":" + minutes);
    }
  }, [chat]);

  return (
    <StyChatListItemContainer key={key} onClick={onClick} active={active}>
      <StyAvatar src={chat.image} />
      <StyLines>
        <StyLine>
          <StyLineContactName>{chat.name}</StyLineContactName>
          <StyLineDate>{lastMessageDate}</StyLineDate>
        </StyLine>
        <StyLine>
          <StyLineLastMsg>
            <p>{chat.lastMessage}</p>
          </StyLineLastMsg>
        </StyLine>
      </StyLines>
    </StyChatListItemContainer>
  );
};

export { ChatListItem };
