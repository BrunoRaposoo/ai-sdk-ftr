import { openrouter } from "@/src/ai/open-router";
import { tools } from "@/src/ai/tools";
import { streamText } from "ai";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { messages } = await request.json()

  const result = streamText({
    model: openrouter.chat('nvidia/nemotron-3-ultra-550b-a55b:free'),
    tools,
    messages,
    maxSteps: 5,
    toolChoice: 'required',
    system: `
      Sempre responda em markdown sem aspas no início ou fim da mensagem.
    `,
  })

  return result.toDataStreamResponse()
}