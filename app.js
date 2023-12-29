import * as dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";
import mongoose from 'mongoose'

import express from "express";
const app = express();

// routers
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'
import contentRouter from './routes/contentRouter.js'

// this creates a morgan logger middleware with 'format' argument set to a string of 'dev' (basically a HTTP LOGGER)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json())





app.get("/", (req, res) => {
  res.send("<h1>hello world!</h1>");
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/content', contentRouter)

app.get("/api/notes", (req, res) => {
  res.json(notes);
});




export default app;