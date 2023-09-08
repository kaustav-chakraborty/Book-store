import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksroutes from './routes/booksroutes.js'
import cors from 'cors';

const app = express();

app.use(express.json()); // This line is important to parse JSON in request bodies.
app.use(cors());

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishYear: Number,
    // Other fields and schema definitions as needed
  });
  
  
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to tutorial");
});

app.use('/books',booksroutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
