import express from 'express'
// import { router as testRouter } from './3_Routes/routes.test'
import { router as gptRouter } from './3_Routes/routes.gpt'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
const port = 3000

// CORS Configuration
app.use(cors()) // Allow requests from all origins

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
// app.use('/api', testRouter)
app.use('/api', gptRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
