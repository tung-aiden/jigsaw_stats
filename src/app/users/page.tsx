"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching puzzles:", error));
    <div className="then"></div>;
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users ? <pre>{JSON.stringify(users, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
