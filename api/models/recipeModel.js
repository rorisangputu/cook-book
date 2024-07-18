import mongoose from 'mongoose';
const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String,

    },
    cuisine: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,

    },
    difficulty: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }

}, {
    timestamps: true
});


export default mongoose.model('Recipe', recipeSchema);