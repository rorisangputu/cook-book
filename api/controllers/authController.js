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
        //console.log(newUser);
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) return next(createError(404, "User not found"));

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return next(createError(400, "Wrong password or username"));
        const key = process.env.JWT_KEY;
        const token = jwt.sign(
            {
                id: user._id,
            },
            key,
            { expiresIn: '1h' } // Token expires in 1 hour
        );
        

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: true, // Ensure secure cookie in production
            //secure: process.env.NODE_ENV === 'production', // Ensure secure cookie in production
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000, // 1 hour
        }).status(200).send(info);

        //console.log("User logged in");
    } catch (err) {
        console.error(err);
        next(err);
    }
}
export const logout = async (req, res, next) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    }).status(200).send("User has been logged out");
}

export const deleteUser = async (req, res) => {
    //console.log(req.params.id)
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId); // Assuming User is your user model
        res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
        }).status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete user.', error: err.message });
    }
};