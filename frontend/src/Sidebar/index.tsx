import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import ChatListItem from "../components/ChatListItem";
import { ChatItem } from "../interfaces/ChatItem";
import {
  ChatList, Content,
  Header,
  HeaderButtonArea, HeaderButtons, HeaderImage,
  Search,
  SearchInput,
  SearchInputArea
} from "./styles";

interface IProps {
  activeChat?: ChatItem;
  setActiveChat: Function;
}
const Sidebar: React.FC<IProps> = ({ activeChat, setActiveChat }) => {
  const [chatList] = useState<ChatItem[]>([
    {
      chatId: 1,
      name: "Fulano de tal 1",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
    {
      chatId: 2,
      name: "Fulano de tal 2",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
    {
      chatId: 3,
      name: "Fulano de tal 3",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
    {
      chatId: 4,
      name: "Fulano de tal 4",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
  ]);

  return (
    <Content>
      <Header>
        <HeaderImage src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />

        <HeaderButtons>
          <HeaderButtonArea>
            <DonutLargeIcon htmlColor="#919191" />
          </HeaderButtonArea>

          <HeaderButtonArea>
            <ChatIcon htmlColor="#919191" />
          </HeaderButtonArea>

          <HeaderButtonArea>
            <MoreVertIcon htmlColor="#919191" />
          </HeaderButtonArea>
        </HeaderButtons>
      </Header>

      <Search>
        <SearchInputArea>
          <SearchIcon htmlColor="#919191" fontSize="small" />

          <SearchInput
            type="search"
            placeholder="Procurar ou começar uma nova conversa"
          />
        </SearchInputArea>
      </Search>

      <ChatList>
        {chatList.map((chat: ChatItem, key: number) => (
          <ChatListItem
            key={key}
            onClick={() => setActiveChat(chat)}
            chat={chat}
            active={activeChat?.chatId === chat.chatId}
          />
        ))}
      </ChatList>
    </Content>
  );
}

export default Sidebar;
