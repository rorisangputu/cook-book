import createError from "../utils/createError.js";
import Review from "../models/reviewModel.js";
import Recipe from "../models/recipeModel.js";

export const createReview = async (req, res, next) => {
    const { user, recipe, rating, comment } = req.body;

    try {
        // Create the new review
        const newReview = new Review({
            user,
            recipe,
            rating,
            comment,
        });

        // Save the review
        const savedReview = await newReview.save();

        // Add the review to the recipe's reviews array
        await Recipe.findByIdAndUpdate(
            recipe,
            { $push: { reviews: savedReview._id } }, // Push review ID to reviews array
            { new: true }
        );

        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create review' });
    }
};

export const getReviews = async (req, res, next) => {
    const recipeId = req.params.id;
    const reviews = await Review.find({ recipe: recipeId }).populate('user', ['username', 'img']);
    //console.log('Reviews:', reviews);
    res.json(reviews);
}

export const deleteReview = async (req, res, next) => {
    const reviewId = req.params.id;
    //console.log(reviewId);
    try {
        const deletedReview = await Review.findByIdAndDelete(reviewId);
        res.status(200).send('Review deleted successfully');
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).send('Failed to delete review');
    }
};

