import db from '../0_Config/config'
import express, { Request, Response, NextFunction } from 'express'

import { AICallTest } from '../6_Services/service.gpt'


export const gpt = async (req: Request, res: Response) => {
  const { prompt } = req.body 
  try{
    const response = await AICallTest(prompt)
    res.json({response})
  }catch(error){
    res.status(500).send('Error calling GPT')
  }
}
