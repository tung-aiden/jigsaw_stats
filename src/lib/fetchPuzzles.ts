import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../app/firebase";
import { Puzzle } from "@/types";

export async function fetchPuzzles() {
  const puzzlesCollection = collection(db, "puzzles");
  const puzzleSnapshot = await getDocs(puzzlesCollection);
  return puzzleSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function fetchSinglePuzzle(
  puzzleId: string
): Promise<Puzzle | null> {
  const puzzleDoc = await getDoc(doc(db, "puzzles", puzzleId));
  if (puzzleDoc.exists()) {
    return { id: puzzleId, ...puzzleDoc.data() } as Puzzle;
  } else {
    return null;
  }
}
