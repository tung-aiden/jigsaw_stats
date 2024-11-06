"use client";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();
  const { userId } = params;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  return (
    <div>
      <h1>User Details</h1>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
