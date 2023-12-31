import * as dotenv from "dotenv";
dotenv.config();

import fs from 'fs'
import ContentModel from "../models/ContentModel.js";

import mongoose from 'mongoose'




const DB = process.env.MONGO_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)


// SERVER CONNECTION TO DB
const port = process.env.PORT || 4500;


  mongoose.connect(DB).then(con => console.log('db connection successful'));
  

  




// READ DATA

const contents = JSON.parse(fs.readFileSync(`./dev-data/contents-data.json`,'utf-8'))


// IMPORT DATA INTO DB

const importData = async()=>{
    try {
        await ContentModel.create(contents);
        console.log('Data Successfully loaded!');
        process.exit()
    } catch (err) {
        console.log(err);
    }
}


// DELETE ALL DATA IN DB

const deleteData = async()=>{
    try {
        await ContentModel.deleteMany()
        console.log('Data Successfully Deleted!');
        process.exit()
    } catch (err) {
        console.log(err);
    }
}


console.log(process.argv);

if(process.argv[2]=== '--import'){
    importData()
} else if(process.argv[2]=== '--delete'){
    deleteData()
}