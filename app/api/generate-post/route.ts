import { NextResponse } from "next/server";
import { generatePost } from "@/services/geminiService";

export async function POST(req: Request) {
  try {
    const {
      inputText,
      selectedPlatform,
      selectedLanguage,
      humorLevel,
      emotionLevel,
      postIntent,
      isThreadMode,
      isLongVideo,
      isPro,
      customInstruction,
      lengthOption,
      perspective,
    } = await req.json();

    const result = await generatePost(
      inputText,
      selectedPlatform,
      selectedLanguage,
      humorLevel,
      emotionLevel,
      postIntent,
      isThreadMode,
      isLongVideo,
      isPro,
      customInstruction,
      lengthOption,
      perspective
    );

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Gemini API Error (generate-post):", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "内部エラー" },
      { status: 500 }
    );
  }
}
