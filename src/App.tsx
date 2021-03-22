import React, { useContext } from "react";
import { ContentArea } from "./components/ContentArea";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { ApplicationContext } from "./context/ApplicationContext";
import { StyAppContainer } from "./styles";

function App() {
  const { user } = useContext(ApplicationContext);

  return (
    <StyAppContainer>
      {user === null ? (
        <Login />
      ) : (
        <React.Fragment>
          <Sidebar />
          <ContentArea />
        </React.Fragment>
      )}
    </StyAppContainer>
  );
}

export { App };
