import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from 'mongoose'


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


// DUMMY DATA ---- DUMMY DATA ---- DUMMY DATA ---- DUMMY DATA ---- DUMMY DATA
let notes = [
  { id: 1, content: "HTML is easy", important: true },
  { id: 2, content: "Browser can execute only JavaScript", important: false },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
//  ---- DUMMY DATA  ---- DUMMY DATA  ---- DUMMY DATA  ---- DUMMY DATA  ---- DUMMY DATA
// MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES
app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    res.json(note);
    console.log(note)
  } else {
    res.status(404).end();
  }
});

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

// MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented ---- MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
// MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented ---- MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented

// MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES



// SERVER CONNECTION TO DB
const port = process.env.PORT || 4500;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  
} catch (error) {
  console.log(error);
  process.exit(1);
  
}