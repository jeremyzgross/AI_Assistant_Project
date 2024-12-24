import express from 'express'
import { gpt } from '../2_Controllers/controller.gpt'
import { upload } from '../6_Services/service.upload'
export const router = express.Router()

router.post('/gpt', upload.single('resume'), gpt)
