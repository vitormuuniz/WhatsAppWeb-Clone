import { Chat } from "../Chat";

export interface User {
  id?: string;
  chatId?: string;
  name?: string;
  avatar?: string;
  chats?: Chat[];
  lastMessage?: string;
  lastMessageDate?: any;
}
