import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
const port = 3000

// CORS Configuration
app.use(cors()) // Allow requests from all origins

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


