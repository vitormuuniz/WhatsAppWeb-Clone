import { Chat } from "../Chat";

export interface User {
  id?: string;
  name?: string;
  avatar?: string;
  chats?: Chat[];
}
