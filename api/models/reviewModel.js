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
    userImg: {
        type: String
    }

}, {
    timestamps: true //Options: creates at and updated at 
});

export default mongoose.model('Review', reviewSchema);