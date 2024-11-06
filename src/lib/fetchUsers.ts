import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebase";

export async function fetchUsers() {
  const usersCollection = collection(db, "users");
  const userSnapshot = await getDocs(usersCollection);
  return userSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
