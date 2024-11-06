import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebase";

export async function fetchPuzzles() {
  const puzzlesCollection = collection(db, "puzzles");
  const puzzleSnapshot = await getDocs(puzzlesCollection);
  return puzzleSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
