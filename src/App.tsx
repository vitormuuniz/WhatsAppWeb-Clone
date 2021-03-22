import React, { useState } from "react";
import { ContentArea } from "./components/ContentArea";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { addUser } from "./config/Api";
import { AppContainer } from "./styles";

function App() {
  const [activeChat, setActiveChat] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

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
    <AppContainer>
      {user === null ? (
        <Login onReceive={handleLoginData} />
      ) : (
        <React.Fragment>
          <Sidebar
            user={user}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
          <ContentArea user={user} activeChat={activeChat} />
        </React.Fragment>
      )}
    </AppContainer>
  );
}

export { App };
