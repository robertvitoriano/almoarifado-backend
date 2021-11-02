import path from 'path'
import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import "reflect-metadata";
import dotenv from 'dotenv'
import routes from './routes'
dotenv.config();

// const emailJob  = require('./jobs/emailJob')

import './database'


const app = express();

app.use(morgan(":method :url :response-time  :status"))

app.use(cors());

app.get('/s',(request, response)=>{
    
    response.json({
        message:'API is running !'
    })
})

app.set('views',path.join(__dirname+'/views/'));

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(routes);


// emailJob.start()

export default app