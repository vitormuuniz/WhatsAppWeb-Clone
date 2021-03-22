import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React, { useContext, useEffect, useState } from "react";
import { onChatList } from "../../config/Api";
import { ApplicationContext } from "../../context/ApplicationContext";
import { Chat } from "../../interfaces/Chat";
import { ChatListItem } from "./ChatListItem";
import { NewChat } from "./NewChat";
import {
  StyChatList,
  StySidebarContainer,
  StyHeader,
  StyHeaderButtonArea,
  StyHeaderButtons,
  StyHeaderImage,
  StySearch,
  StySearchInput,
  StySearchInputArea,
} from "./styles";

const Sidebar = () => {
  const { user, activeChat, setActiveChat } = useContext(ApplicationContext);

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
      onChatList(user?.id!, setChatList);
    } else {
      setChatList(results);
    }
  }, [searchChatName]);

  return (
    <StySidebarContainer>
      <NewChat
        user={user}
        showNewChat={showNewChat}
        setShowNewChat={setShowNewChat}
      />
      <StyHeader>
        <StyHeaderImage src={user?.avatar} />

        <StyHeaderButtons>
          <StyHeaderButtonArea>
            <DonutLargeIcon htmlColor="#919191" />
          </StyHeaderButtonArea>

          <StyHeaderButtonArea>
            <ChatIcon
              htmlColor="#919191"
              onClick={() => setShowNewChat(true)}
            />
          </StyHeaderButtonArea>

          <StyHeaderButtonArea>
            <MoreVertIcon htmlColor="#919191" />
          </StyHeaderButtonArea>
        </StyHeaderButtons>
      </StyHeader>

      <StySearch>
        <StySearchInputArea>
          <SearchIcon htmlColor="#919191" fontSize="small" />

          <StySearchInput
            type="search"
            placeholder="Procurar ou começar uma nova conversa"
            value={searchChatName}
            onChange={(event: any) => {
              setSearchChatName(event.target.value);
            }}
          />
        </StySearchInputArea>
      </StySearch>

      <StyChatList>
        {chatList.map((chat: Chat, key: number) => (
          <ChatListItem
            key={key}
            onClick={() => setActiveChat(chat)}
            chat={chat}
            active={activeChat! && activeChat?.chatId! === chat.chatId}
          />
        ))}
      </StyChatList>
    </StySidebarContainer>
  );
};

export { Sidebar };
