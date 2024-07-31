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
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]

}, {
    timestamps: true
});

recipeSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
    try {
        await mongoose.model('Review').deleteMany({ recipe: this._id });
        next();
    } catch (err) {
        next(err);
    }
});

export default mongoose.model('Recipe', recipeSchema);