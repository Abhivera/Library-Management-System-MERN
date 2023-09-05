import express from "express";
import mysql from "mysql";

import  {PORT,mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
// app.use(cors(
//     {
//         origin:"",
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type']
//     }
// ))

app.get("/",(req,res)=>{
    console.log(req);
    return res.send("this is bookstore")
})

app.use('/books',booksRoute);


mongoose.connect(mongoDBURL).then(() =>{
    console.log(`App is connected to database`);
    app.listen(PORT,() =>{
        console.log(`app is listening to port ${PORT}`)
        });
}).catch((error)=>{
    console.log(error);
})

const conn = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"",



    }
)