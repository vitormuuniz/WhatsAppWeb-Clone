import React, { useState } from "react";
import { ContentArea } from "./components/ContentArea";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { addUser } from "./config/Api";
import { User } from "./interfaces/User";
import { Content } from "./styles";

function App() {
  const [activeUser, setActiveUser] = useState<any>(null);
  const [user, setUser] = useState<any>({
    id: 'SBaNZkm2Q6WoVVXUon0yP1XglkE3',
    name: 'Vitor Muniz',
    avatar: 'https://graph.facebook.com/10214859142550384/picture',
  });

  const handleLoginData = async (u: any) => {
    const newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };

    await addUser(newUser);

    setUser(newUser);
  };

  return (
    <Content>
      {user === null ? (
        <Login onReceive={handleLoginData} />
      ) : (
        <React.Fragment>
          <Sidebar
            user={user}
            setActiveUser={setActiveUser}
          />
          <ContentArea user={activeUser} />
        </React.Fragment>
      )}
    </Content>
  );
}

export { App };
