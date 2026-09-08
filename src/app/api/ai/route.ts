import { openrouter } from "@/src/ai/open-router";
import { generateObject } from "ai";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const result = await generateObject({
    model: openrouter.chat('nvidia/nemotron-3-ultra-550b-a55b:free'),
    schema: z.object({
      pt: z.string().describe("Tradução para português"),
      fr: z.string().describe("Tradução para francês"),
      es: z.string().describe("Tradução para espanhol"),
    }),
    prompt: 'Traduza "Hello World" para diferentes idiomas!',
    system: 'Você é uma AI especializada em tradução, sempre retorne da maneira sucinta possível.'
  })

  return NextResponse.json({ message: result.object })
}