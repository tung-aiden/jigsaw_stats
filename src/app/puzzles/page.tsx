"use client";
import { useEffect, useState } from "react";

export default function PuzzlesPage() {
  const [puzzles, setPuzzles] = useState(null);

  useEffect(() => {
    fetch("/api/puzzles")
      .then((response) => response.json())
      .then((data) => setPuzzles(data))
      .catch((error) => console.error("Error fetching puzzles:", error));
  }, []);

  return (
    <div>
      <h1>Puzzles</h1>
      {puzzles ? (
        <pre>{JSON.stringify(puzzles, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
