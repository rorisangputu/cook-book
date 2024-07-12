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
        type: Number,
        required: true,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});


module.exports = mongoose.model('Recipe', recipeSchema);