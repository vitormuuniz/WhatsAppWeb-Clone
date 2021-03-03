import React, { useState, useEffect } from "react";
import {
  Content,
  Header,
  HeaderImage,
  HeaderButtons,
  HeaderButtonArea,
  Search,
  SearchInput,
  ChatList,
  SearchInputArea,
} from "./styles";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "../components/ChatListItem";

function Sidebar() {
    const [chatList, setChatList] = useState<any[]>([{}, {}, {}, {}, {}, {},{}, {}, {},{}, {}, {},{}]);

    return (
    <Content>
      <Header>
        <HeaderImage
          src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        />

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
        {chatList.map((item, key) => (
            <ChatListItem
                key={key}
            />
        ))}
      </ChatList>

    </Content>
  );
}

export default Sidebar;
