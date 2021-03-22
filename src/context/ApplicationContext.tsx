import { createContext, useState } from "react";

interface ApplicationContextData {
  user: any;
  activeChat: any;
  setUser: Function;
  setActiveChat: Function;
}

export const ApplicationContext = createContext({} as ApplicationContextData);

export function ApplicationProvider({ children }: any) {
  const [user, setUser] = useState(null);
  const [activeChat, setActiveChat] = useState(null);

  return (
    <ApplicationContext.Provider
      value={{ user, setUser, activeChat, setActiveChat }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
