import createError from "../utils/createError.js";
import Review from "../models/reviewModel.js";
import Recipe from "../models/recipeModel.js";

export const createReview = async (req, res, next) => {
    const { user, recipe, rating, comment, userImg } = req.body;

    try {
        const newReview = new Review({
            user: mongoose.Types.ObjectId(user),
            recipe: mongoose.Types.ObjectId(recipe),
            rating,
            comment,
            userImg
        });

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
