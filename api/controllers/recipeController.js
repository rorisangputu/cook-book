import Recipe from '../models/recipeModel.js';

export const createRecipe = async (req, res, next) => {
    console.log(req.body)
    const newRecipe = new Recipe({})
}
export const getRecipes = async (req, res, next) => {
    console.log(req.body)
    const newRecipe = new Recipe({})
}