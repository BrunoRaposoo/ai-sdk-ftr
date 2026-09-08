import { openrouter } from "@/src/ai/open-router";
import { generateText } from "ai";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const result = await generateText({
    model: openrouter.chat('nvidia/nemotron-3-ultra-550b-a55b:free'),
    prompt: 'Traduza "Hello World" para português!',
    system: 'Você é uma AI especializada em tradução, sempre retorne da maneira sucinta possível.'
  })

  return NextResponse.json({ message: result.text })
}