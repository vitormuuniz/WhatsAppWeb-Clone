import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect, useState } from "react";
import { addNewChat, getContactsList } from "../../../config/Api";
import { User } from "../../../interfaces/User";
import {
  StyContact,
  StyContactImage,
  StyContactName,
  StyContactsList,
  StyNewChatContainer,
  StyHeader,
  StyHeaderBackButton,
  StyHeaderTitle,
} from "./styles";

interface IProps {
  user: User;
  showNewChat: boolean;
  setShowNewChat: Function;
}
const NewChat: React.FC<IProps> = ({ user, showNewChat, setShowNewChat }) => {
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    const getChatList = async () => {
      if (user !== null) {
        let results = await getContactsList(user.id!);
        setList(results);
      }
    };

    getChatList();
  }, [user, setList]);

  async function createNewChat(user2: User) {
    let results: User[] = await getContactsList(user.id!);

    results = results.filter((aux: User) => {
      if (aux.id === user2.id) return aux;
    });

    if (results.length === 0) await addNewChat(user, user2);

    handleClose();
  }

  function handleClose() {
    setShowNewChat(false);
  }

  return (
    <StyNewChatContainer showNewChat={showNewChat}>
      <StyHeader>
        <StyHeaderBackButton>
          <ArrowBackIcon htmlColor="#FFF" onClick={handleClose} />
        </StyHeaderBackButton>
        <StyHeaderTitle>Nova Conversa</StyHeaderTitle>
      </StyHeader>
      <StyContactsList>
        {list.map((contact: User, key: number) => (
          <StyContact key={key} onClick={() => createNewChat(contact)}>
            <StyContactImage src={contact.avatar} />
            <StyContactName>{contact.name}</StyContactName>
          </StyContact>
        ))}
      </StyContactsList>
    </StyNewChatContainer>
  );
};

export { NewChat };
