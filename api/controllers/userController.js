import User from "../models/userModel.js";
import Recipe from '../models/recipeModel.js';
import createError from "../utils/createError.js";
export const getUser = async (req, res, next) => {
    const userId = req.params.id
    try {
        const user = await User.findById(userId).select('-password');
        if (!user)
            return next(createError(404, "User not found"))

        res.status(200).send(user);
    } catch (error) {
        next(error)
    }
}
export const getUserRecipes = async (req, res, next) => {
    const authorId = req.params.id;
    try {
        const userRecipes = await Recipe.find({ author: authorId }).populate('author', ['username']);
        res.json(userRecipes);
    } catch (err) {
        next(err)
    }
}

export const editprofile = async (req, res, next) => {
    // console.log(req.body._id)
    try {
        const userId = req.body._id;
        const user = await User.findById(userId);

        if(!user) return createError(404, "User not found");
        
        const updateUser = req.body;

        const savedUser = await User.findByIdAndUpdate(userId, updateUser, {new: true});
        res.status(200).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }


}