import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Review', reviewSchema);