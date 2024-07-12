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
        await mongoose.connect();
        console.log('Connected to Databse')
    } catch (error) {
        console.log(error);
    }
}