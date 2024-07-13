import Recipe from '../models/recipeModel.js';

export const createRecipe = async (req, res) => {

    const newRecipe = new Recipe({
        ...req.body
    })
    try {
        console.log(newRecipe);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.log(error)
    }
}
export const getRecipes = async (req, res, next) => {
    console.log(req.body)
    const newRecipe = new Recipe({})
}