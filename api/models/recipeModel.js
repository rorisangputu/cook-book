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
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true,

    },
    category: {
        type: [String],
        required: true,
        validate: [arrayLimit, '{PATH} must have at least one category']
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

function arrayLimit(val) {
    return val.length > 0;
}

module.exports = mongoose.model('Recipe', recipeSchema);