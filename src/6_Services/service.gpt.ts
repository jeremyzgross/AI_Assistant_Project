import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
})

export const AICallTest = async (prompt: string) => {
  const stream = await openai.chat.completions.create({
    model: "meta/llama-3.1-405b-instruct",
    messages: [{ role: 'user', content: prompt }],
    stream: true,
    max_tokens: 100,
  })
  let response = ''
  for await (const chunk of stream) {
    response += chunk.choices[0]?.delta?.content || ''
  }
  return response
}
