import { fetchPuzzles } from "../../../lib/fetchPuzzles";

export async function GET() {
  try {
    const puzzles = await fetchPuzzles();
    return new Response(JSON.stringify(puzzles), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch puzzles" }),
      {
        status: 500,
      }
    );
  }
}
