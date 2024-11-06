import { fetchSinglePuzzle } from "../../../../lib/fetchPuzzles";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ puzzleId: string }> }
) {
  try {
    const puzzleId = (await params).puzzleId;
    const puzzle = await fetchSinglePuzzle(puzzleId);
    if (puzzle) {
      return NextResponse.json(puzzle);
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
