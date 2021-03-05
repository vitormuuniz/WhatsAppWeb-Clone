import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import ChatListItem from "../components/ChatListItem";
import { User } from "../interfaces/User";
import {
  ChatList,
  Content,
  Header,
  HeaderButtonArea,
  HeaderButtons,
  HeaderImage,
  Search,
  SearchInput,
  SearchInputArea
} from "./styles";

interface IProps {
  user: User;
  chatList: User[];
  setActiveUser: Function;
}
const Sidebar: React.FC<IProps> = ({ user, chatList, setActiveUser }) => {
  return (
    <Content>
      <Header>
        <HeaderImage src={user.avatar} />

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
        {chatList.map((chat: User, key: number) => (
          <ChatListItem
            key={key}
            onClick={() => setActiveUser(chat)}
            user={chat}
            active={user?.id === chat.id}
          />
        ))}
      </ChatList>
    </Content>
  );
};

export default Sidebar;
