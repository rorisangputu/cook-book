import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
dotenv.config();

//db connection
const connect = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.MONGO_CON);
        console.log('Connected to Database')
    } catch (error) {
        console.log(error);
    }
}

app.listen(8800, () => {
    connect();
    console.log("Listening on port 8800");
})