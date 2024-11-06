import { fetchSinglePuzzle } from "../../../../lib/fetchPuzzles";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { puzzleId: string } }
) {
  try {
    const { puzzleId } = params;
    const user = await fetchSinglePuzzle(puzzleId);
    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: "Puzzle not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch puzzle data" },
      { status: 500 }
    );
  }
}
