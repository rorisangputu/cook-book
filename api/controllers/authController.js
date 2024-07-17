import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

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
        next(error)
    }
}

export const login = async (req, res, next) => {
    console.log(req.body);

    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) return next(createError(404, "User not found"))

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return next(createError(400, "Wrong password or username"));

        const token = jwt.sign(
            {
                id: user._id,

            },
            process.env.JWT_KEY
        );

        const { password, ...info } = user._doc
        res.cookie("accessToken", token, {
            httpOnly: true
        }).status(200).send(info)
        console.log("User loged in")
    } catch (err) {
        next(err)
    }
}
export const logout = async (req, res, next) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    }).status(200).send("User has been logged out");
}