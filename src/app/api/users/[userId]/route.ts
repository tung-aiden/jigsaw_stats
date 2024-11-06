import { fetchSingleUser } from "../../../../lib/fetchUsers";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const user = await fetchSingleUser(userId);
    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
