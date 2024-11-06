import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../app/firebase";
import { User } from "@/types";

const usersCollection = collection(db, "users");

export async function fetchUsers() {
  const userSnapshot = await getDocs(usersCollection);
  return userSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function fetchSingleUser(userId: string): Promise<User | null> {
  const userDoc = await getDoc(doc(db, "users", userId));
  if (userDoc.exists()) {
    return { id: userId, ...userDoc.data() } as User;
  } else {
    return null;
  }
}
