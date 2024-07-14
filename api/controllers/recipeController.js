import Recipe from '../models/recipeModel.js';
const jwt_secret = process.env.JWT_KEY;

export const createRecipe = async (req, res, next) => {
    const newRecipe = new Recipe({
        ...req.body,
        author: req.userId // Adding the user ID to the recipe data
    });

    try {
        console.log(newRecipe);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        next(error);
    }
}

export const getRecipes = async (req, res, next) => {

    const recipes = await Recipe.find().populate('author', ['username']);
    res.send(recipes);
}