import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const AICallTest = async (prompt: string) => {
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    stream: true,
  })
  let response = ''
  for await (const chunk of stream) {
    response += chunk.choices[0]?.delta?.content || ''
  }
  return response
}
