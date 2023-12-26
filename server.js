import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import morgan from "morgan";

// this creates a morgan logger middleware with 'format' argument set to a string of 'dev' *basically a HTTP LOGGER*
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json())

let notes = [
  { id: 1, content: "HTML is easy", important: true },
  { id: 2, content: "Browser can execute only JavaScript", important: false },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>hello world!</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

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

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
