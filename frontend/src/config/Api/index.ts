import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import { User } from "../../interfaces/User";
import { firebaseConfig } from "../Firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const fbPopup = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  let result = await firebaseApp.auth().signInWithPopup(provider);
  return result;
};

export const addUser = async (u: User) => {
  await db.collection("users").doc(u.id).set(
    {
      name: u.name,
      avatar: u.avatar,
    },
    { merge: true }
  );
};

// export const add2Users = async (user: User, user2: User) => {
//   await db.collection("users").doc(u.id).set(
//     {
//       name: u.name,
//       avatar: u.avatar,
//     },
//     { merge: true }
//   );
// };

export const getContactsList = async (userId: string) => {
  let list: User[] = [];

  let results = await db.collection("users").get();

  results.forEach((result) => {
    let data = result.data();

    if (result.id !== userId) {
      list.push({ id: result.id, name: data.name, avatar: data.avatar });
    }
  });

  return list;
};
