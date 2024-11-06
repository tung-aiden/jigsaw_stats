"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "@/types";

export default function UsersPage() {
  const [puzzles, setPuzzles] = useState<User[]>([]);

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
        <ul>
          {puzzles.map((puzzle) => (
            <li key={puzzle.id}>
              <Link href={`/puzzles/${puzzle.id}`}>{puzzle.id}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
