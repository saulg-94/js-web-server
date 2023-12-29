import * as dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from 'mongoose'




const DB = process.env.MONGO_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)


// SERVER CONNECTION TO DB
const port = process.env.PORT || 4500;

try {
  await mongoose.connect(DB).then(con => console.log('db connection successful'));
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  
} catch (error) {
  console.log(error);
  process.exit(1);
  
}