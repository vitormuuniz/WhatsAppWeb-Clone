import { Message } from "../Message";
import { User } from "../User";

export interface Chat {
  chatId?: string;
  image?: string;
  name?: string;
  with?: string;
  users?: User[];
  messages?: Message[];
  lastMessage?: string;
  lastMessageDate?: any;
}
