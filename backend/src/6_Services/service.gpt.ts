import OpenAI from 'openai'
import dotenv from 'dotenv'
import { pdfParseService } from './service.pdftotext'
import { upload } from './service.upload'
dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
})



const uploadedResume = upload.single('resume')


export const AICallTest = async (prompt: string, resume: any) => {
  const contentAndResume = prompt + resume
  const stream = await openai.chat.completions.create({
    model: 'meta/llama-3.1-405b-instruct',
    messages: [{ role: 'user', content: contentAndResume }],
    stream: true,
    max_tokens: 100,
  })
  let response = ''
  for await (const chunk of stream) {
    response += chunk.choices[0]?.delta?.content || ''
  }
  return response
}
