import createError from "../utils/createError.js";
import Review from "../models/reviewModel.js";
import Recipe from "../models/recipeModel.js";

export const createReview = async (req, res, next) => {
    console.log('Dataaa:', req.body); //data is being passed
    const { user, recipe, rating, comment } = req.body;

    try {
        const newReview = new Review({
            user,
            recipe,
            rating,
            comment,

        });
        console.log(newReview); //but not inserted
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create review' });
    }

}

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({ recipeId: req.params.id });
        res.status(200).send(reviews);
    } catch (error) {
        next(error)
    }
}
export const deleteReview = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}
