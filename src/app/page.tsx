import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Jigsaw Stats</h1>
      <li key="users">
        <Link href={`/users`}>Users</Link>
      </li>
      <li key="puzzles">
        <Link href={`/puzzles`}>Puzzles</Link>
      </li>
    </div>
  );
}
