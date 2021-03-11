import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import { Chat } from "../../interfaces/Chat";
import { Message } from "../../interfaces/Message";
import { User } from "../../interfaces/User";
import { firebaseConfig } from "../Firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export async function fbPopup() {
  const provider = new firebase.auth.FacebookAuthProvider();
  let result = await firebaseApp.auth().signInWithPopup(provider);
  return result;
}

export async function googlePopup() {
  const provider = new firebase.auth.GoogleAuthProvider();
  let result = await firebaseApp.auth().signInWithPopup(provider);
  return result;
}

export async function addUser(user: User) {
  await db.collection("users").doc(user.id).set(
    {
      name: user.name,
      avatar: user.avatar,
    },
    { merge: true }
  );
}

export async function addNewChat(user: User, user2: User) {
  let newChat = await db.collection("chats").add({
    messages: [],
    users: [user.id, user2.id],
    image: user2.avatar,
    name: user2.name,
  });

  db.collection("users")
    .doc(user.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        name: user2.name,
        image: user2.avatar,
        with: user2.id,
      }),
    });

  db.collection("users")
    .doc(user2.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        name: user.name,
        image: user.avatar,
        with: user.id,
      }),
    });
}

export async function getContactsList(userId: string) {
  let list: User[] = [];

  let results = await db.collection("users").get();

  results.forEach((result) => {
    let data = result.data();

    if (result.id !== userId) {
      list.push({ id: result.id, name: data.name, avatar: data.avatar });
    }
  });

  return list;
}

export function onChatList(userId: string, setChatList: Function) {
  return db
    .collection("users")
    .doc(userId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        let data: User = doc.data()!;

        if (data.chats) {
          let chats = data.chats;

          chats.sort((a: Chat, b: Chat) => {
            if (
              a.lastMessageDate === undefined ||
              b.lastMessageDate === undefined
            ) {
              return -1;
            }
            if (a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
              return 1;
            } else {
              return -1;
            }
          });
          setChatList(chats);
        }
      }
    });
}

export function onChatContent(
  chatId: string,
  setMessagesList: Function,
  setUsersList: Function
) {
  return db
    .collection("chats")
    .doc(chatId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        let data: Chat = doc.data()!;
        data.messages?.forEach((message: Message) => {
          let { seconds } = message.date;

          let auxDate: Date = new Date(seconds * 1000);

          let hours: string =
            auxDate.getHours() < 10
              ? "0" + auxDate.getHours().toString()
              : auxDate.getHours().toString();

          let minutes: string =
            auxDate.getMinutes() < 10
              ? "0" + auxDate.getMinutes().toString()
              : auxDate.getMinutes().toString();

          message.date = hours + ":" + minutes;
        });
        setMessagesList(data.messages);
        setUsersList(data.users);
      }
    });
}

export function sendMessage(
  chat: Chat,
  userId: string,
  type: string,
  content: any,
  users: User[]
) {
  let now = new Date();

  db.collection("chats")
    .doc(chat.chatId)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion({
        idAuthor: userId,
        type,
        content,
        date: now,
      }),
    });

  users.forEach(async (user: User) => {
    let u = await db.collection("users").doc(String(user)).get();
    let uData: User = u.data()!;

    if (uData.chats) {
      let chats: Chat[] = uData.chats;

      chats.forEach((chatItem: Chat) => {
        if (chatItem.chatId === chat.chatId) {
          chatItem.lastMessage = content;
          chatItem.lastMessageDate = now;
        }
      });

      await db.collection("users").doc(String(user)).update({
        chats: chats,
      });
    }
  });
}
