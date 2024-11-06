import { fetchUsers } from "../../../lib/fetchUsers";

export async function GET() {
  try {
    const users = await fetchUsers();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to fetch users" }), {
      status: 500,
    });
  }
}
