
import dotenv from 'dotenv'

dotenv.config()

import express from 'express'

import cors from 'cors'

import connectDB from './config/connectdb.js'

import UserRoutes from './routes/userRoutes.js'


const app = express()

const port = process.env.PORT 

const  DATABASE_URL = process.env.DATABASE_URL

// CORS Policy

app.use(cors())

// Database connection

connectDB(DATABASE_URL)


// JSON 

app.use(express.json())

// Load Routes

app.use("/api/user",UserRoutes)

// starting the server

app.listen(port,() =>{

    console.log(`Server is listening at http://localhost:${port}`)

})





