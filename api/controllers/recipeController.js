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
export const getPopularRecipes = async (req, res, next) => {

    const recipes = await Recipe.find().populate('author', ['username']).limit(6);
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