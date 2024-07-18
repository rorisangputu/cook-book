import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import createError from './utils/createError.js';

//Routes
import recipeRoutes from './routes/recipeRoute.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
const port = process.env.PORT || 8800
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

app.use("/recipes", recipeRoutes);
app.use("/auth", authRoutes);
app.use("/profile", userRoutes)
app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong"

    return next(createError(errStatus, errMessage))
});

app.listen(port, () => {
    connect();
    console.log("Listening on port 8800");
})