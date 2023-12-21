import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import userRoutes from '../server/routes/users.js'
import dotenv from 'dotenv'
// import {Configuration, OpenAIApi} from 'openai';

// const configuration = new Configuration({
//     apiKey : process.env.api
// }) 

// const openai = new OpenAIApi(configuration);
const app = express();
dotenv.config();    
app.use(express.json({limit : '30mb',extended : 'true'}))
app.use(express.urlencoded({limit : '30mb',extended : 'true'}))
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req,res) =>{
    res.send("This is a stack overflow clone API")
// })
})
app.use('/user', userRoutes)    

const PORT = process.env.PORT;

const CONNECTION_URL =  process.env.DATA_URL

mongoose.connect(CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => app.listen(PORT,() => {console.log( `server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message) )
;




