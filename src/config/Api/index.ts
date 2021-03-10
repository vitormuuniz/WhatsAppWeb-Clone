import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import { Chat } from "../../interfaces/Chat";
import { User } from "../../interfaces/User";
import { firebaseConfig } from "../Firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export async function fbPopup() {
  const provider = new firebase.auth.FacebookAuthProvider();
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
  });

  db.collection("users")
    .doc(user.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        name: user2.name,
        avatar: user2.avatar,
        with: user2.id,
      }),
    });

  db.collection("users")
    .doc(user2.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        name: user.name,
        avatar: user.avatar,
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
          setChatList(data.chats);
        }
      }
    });
}

export function onChatContent(chatId: string, setList: Function) {
  return db
    .collection("chats")
    .doc(chatId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        let data: Chat = doc.data()!;

        setList(data.messages);
      }
    });
}
