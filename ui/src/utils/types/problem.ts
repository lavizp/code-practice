type Difficulty = "Easy" | "Medium" | "Hard";

export interface IProblem {
  id: number;
  title: string;
  category: string;
  difficulty: Difficulty;
  likes: number;
  dislikes: number;
  order: number;
  videoId?: string | null;
  link?: string | null;
  problemStatement: string; // HTML content stored as text
  constraints: string; // HTML content stored as text
  handlerFunction: string;
  starterCode: string;
  starterFunctionName: string;
}
