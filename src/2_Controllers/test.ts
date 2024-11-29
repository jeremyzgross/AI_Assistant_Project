import express, { Request, Response, NextFunction } from 'express'
import { _test } from '../1_Models/test'

export const test = async (req: Request, res: Response) => {
  await _test()
  if (res.status(400)) {
    res.send('db connected code 400')
  } else {
    res.send('db connection error',)
  }
}
