"use client";
import { Puzzle } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();
  const { puzzleId } = params;
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);

  useEffect(() => {
    fetch(`/api/puzzles/${puzzleId}`)
      .then((response) => response.json())
      .then((data) => setPuzzle(data))
      .catch((error) => console.error("Error fetching puzzle:", error));
  }, [puzzleId]);

  return (
    <div>
      <h1>Puzzle Details</h1>
      {puzzle ? (
        <pre>{JSON.stringify(puzzle, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
