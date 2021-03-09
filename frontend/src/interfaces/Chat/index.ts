import { Message } from "../Message";
import { User } from "../User";

export interface Chat {
  chatId?: string;
  users?: User[];
  messages?: Message[];
}
