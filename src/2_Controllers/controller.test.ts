import express, { Request, Response, NextFunction } from 'express'
import { _test } from '../1_Models/model.test'

export const test = async (req: Request, res: Response) => {
  const { userId = 'test_user_id', sessionNumber = 1 } = req.body
  try {
    const result = await _test(userId, sessionNumber)
    if (result) {
      res.status(200).send('User session added successfully')
    }
  } catch (error) {
    res.status(500).send('Error adding user session')
  }
}
