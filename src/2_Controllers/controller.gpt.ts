import db from '../0_Config/config'
import express, { Request, Response, NextFunction } from 'express'

import { AICallTest } from '../6_Services/service.gpt'

export const gpt = async (req: Request, res: Response) => {
  let { prompt } = req.body
  try {
    const response = await AICallTest(prompt)
    res.json({ prompt, response })
    console.log('GPT request', prompt)
    console.log('GPT response', response)
  } catch (error) {
    res.status(500).send('Error calling GPT')
    console.error('Error calling GPT', error)
  }
}
