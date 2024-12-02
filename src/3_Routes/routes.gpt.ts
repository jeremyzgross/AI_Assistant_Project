import express from 'express'
import { gpt } from '../2_Controllers/controller.gpt'

export const router = express.Router()

router.post('/gpt', gpt)
