import Recipe from '../models/recipeModel.js';
import jwt from 'jsonwebtoken';
const jwt_secret = process.env.JWT_KEY;

export const createRecipe = async (req, res, next) => {
    const newRecipe = new Recipe({
        ...req.body,
        author: req.userId // Adding the user ID to the recipe data
    });

    try {
        //console.log(newRecipe);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        const errors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ errors });
    }
}

export const getRecipes = async (req, res, next) => {

    const recipes = await Recipe.find().populate('author', ['username']);
    res.send(recipes);
    //console.log(recipes)
}
export const getPopularRecipes = async (req, res, next) => {

    const recipes = await Recipe.find().populate('author', ['username']).limit(4);
    res.send(recipes);
}
export const getRecipe = async (req, res, next) => {
    const recipeId = req.params.id
    try {
        const recipe = await Recipe.findById(recipeId).populate('author', ['username']);
        if (!recipe)
            return next(createError(404, "Recipe not found"))

        res.status(200).send(recipe);
    } catch (error) {
        next(error)
    }
}

export const editRecipe = async (req, res, next) => {
    try {
        const recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        // Proceed with updating the recipe
        const updatedRecipe = {
            ...req.body,
            author: recipe.author // Keep the original author
        };

        //console.log(updatedRecipe);
        const savedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedRecipe, { new: true });

        res.status(200).json(savedRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
};

export const deleteRecipe = async (req, res, next) => {
    
}
