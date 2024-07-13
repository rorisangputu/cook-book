import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 7);
        const newUser = new User({
            ...req.body,
            password: hash
        });

        res.send(newUser);
    } catch (error) {
        console.log(error)
    }
}