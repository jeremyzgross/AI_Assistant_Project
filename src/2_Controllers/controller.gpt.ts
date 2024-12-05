import express, { Request, Response, NextFunction } from 'express'

import { AICallTest } from '../6_Services/service.gpt'
import { pdfParseService } from '../6_Services/service.pdftotext'
import { deleteFile } from '../6_Services/service.upload'

export const gpt = async (req: Request, res: Response) => {
  let { prompt } = req.body
  let filePath = req.file!.path
  try {
    const pdfText = await pdfParseService(filePath)
    const response = await AICallTest(prompt, pdfText)
    res.json({ prompt, response })
    console.log('GPT request', prompt)
    console.log('GPT response', response)
  } catch (error) {
    res.status(500).send('Error calling GPT')
    console.error('Error calling GPT', error)
  } finally {
    deleteFile(filePath)
  }
}
