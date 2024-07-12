import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
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

app.use(express.json());
app.use(cookieParser());

//CORS Config
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
}
app.use(cors(corsOptions));

app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong"

    return next(createError(errStatus, errMessage))
});

app.listen(8800, () => {
    connect();
    console.log("Listening on port 8800");
})