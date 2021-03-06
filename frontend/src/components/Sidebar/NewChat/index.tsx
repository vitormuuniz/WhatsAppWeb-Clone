import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect, useState } from "react";
import { add2Users, getContactsList } from "../../../config/Api";
import { User } from "../../../interfaces/User";
import {
  Contact,
  ContactImage,
  ContactName,
  ContactsList,
  Content,
  Header,
  HeaderBackButton,
  HeaderTitle,
} from "./styles";

interface IProps {
  chatList: User[];
  setChatList: Function;
  user: User;
  showNewChat: boolean;
  setShowNewChat: Function;
}
const NewChat: React.FC<IProps> = ({
  chatList,
  setChatList,
  user,
  showNewChat,
  setShowNewChat,
}) => {

  async function getChatList() {
    let results = await getContactsList(user.id!);

    setChatList(results);
  }

  useEffect(() => {
    if (user !== null) {
      getChatList();
    }
  }, [user]);

  async function addNewChat(user2: User) {
    // await add2Users(user, user2);
  }

  return (
    <Content showNewChat={showNewChat}>
      <Header>
        <HeaderBackButton>
          <ArrowBackIcon
            htmlColor="#FFF"
            onClick={() => setShowNewChat(false)}
          />
        </HeaderBackButton>
        <HeaderTitle>Nova Conversa</HeaderTitle>
      </Header>
      <ContactsList>
        {chatList.map((contact: User, key: number) => (
          <Contact key={key} onClick={() => addNewChat(contact)}>
            <ContactImage src={contact.avatar} />
            <ContactName>{contact.name}</ContactName>
          </Contact>
        ))}
      </ContactsList>
    </Content>
  );
};

export { NewChat };
