import * as dotenv from 'dotenv'
dotenv.config();


import express from "express"
const app = express()
import morgan from "morgan"

// this creates a morgan logger middleware with 'format' argument set to a string of 'dev' *basically a HTTP LOGGER*
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}






app.get('/',(req,res)=>{
    res.send('Hello Worrrld from the dev BRANCH!')
})

const port = process.env.PORT || 4500

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})