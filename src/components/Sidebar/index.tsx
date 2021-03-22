import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import { onChatList } from "../../config/Api";
import { Chat } from "../../interfaces/Chat";
import { User } from "../../interfaces/User";
import { ChatListItem } from "./ChatListItem";
import { NewChat } from "./NewChat";
import {
  ChatList,
  SidebarContainer,
  Header,
  HeaderButtonArea,
  HeaderButtons,
  HeaderImage,
  Search,
  SearchInput,
  SearchInputArea,
} from "./styles";

interface IProps {
  user: User;
  activeChat: Chat;
  setActiveChat: Function;
}
const Sidebar: React.FC<IProps> = ({ user, activeChat, setActiveChat }) => {
  const [showNewChat, setShowNewChat] = useState<boolean>(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [searchChatName, setSearchChatName] = useState<string>("");

  useEffect(() => {
    if (user !== null) {
      onChatList(user.id!, setChatList);
    }
  }, [user]);

  useEffect(() => {
    const results: Chat[] = chatList.filter((chat: Chat) =>
      chat.name!.toLowerCase().includes(searchChatName.toLowerCase())
    );

    if (searchChatName === "" || results.length === 0) {
      onChatList(user.id!, setChatList);
    } else {
      setChatList(results);
    }
  }, [searchChatName]);

  return (
    <SidebarContainer>
      <NewChat
        user={user}
        showNewChat={showNewChat}
        setShowNewChat={setShowNewChat}
      />
      <Header>
        <HeaderImage src={user.avatar} />

        <HeaderButtons>
          <HeaderButtonArea>
            <DonutLargeIcon htmlColor="#919191" />
          </HeaderButtonArea>

          <HeaderButtonArea>
            <ChatIcon
              htmlColor="#919191"
              onClick={() => setShowNewChat(true)}
            />
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
            value={searchChatName}
            onChange={(event: any) => {
              setSearchChatName(event.target.value);
            }}
          />
        </SearchInputArea>
      </Search>

      <ChatList>
        {chatList.map((chat: Chat, key: number) => (
          <ChatListItem
            key={key}
            onClick={() => setActiveChat(chat)}
            chat={chat}
            active={activeChat && activeChat.chatId === chat.chatId}
          />
        ))}
      </ChatList>
    </SidebarContainer>
  );
};

export { Sidebar };
