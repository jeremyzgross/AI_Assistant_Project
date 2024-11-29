import express from 'express'
import { router } from './3_Routes/test'
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
app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
