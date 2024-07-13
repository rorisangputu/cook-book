import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {

    console.log(req.body);

    try {
        const hash = bcrypt.hashSync(req.body.password, 7);
        const newUser = new User({
            ...req.body,
            password: hash
        });
        await newUser.save();
        res.status(201).send('User has been created');
        console.log(newUser);
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res, next) => {
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
export const logout = async (req, res, next) => {
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