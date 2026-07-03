import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
// import dotenv from 'dotenv'
// dotenv.config({path:'./env'})
import 'dotenv/config'

import connectDB from '../src/db/index.js'

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        consol.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGODB DB connection failed !!! ",err)
})

/*
import express from "express"
const app = express()
;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(error) => {
            consol.log("Error: ",error);
            throw error
        })
        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log(error)
        throw error
    }
})()
*/