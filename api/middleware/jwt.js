import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";



export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    const key = process.env.JWT_KEY 
    if (!token) return res.status(401).json({ message: "You are not authenticated." });

    jwt.verify(token, key, async (err, payload) => {
        if (err) return next(createError(403, "Token is not valid."));
        req.userId = payload.id;
        next();
    })
}