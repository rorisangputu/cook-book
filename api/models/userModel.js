import mongoose from 'mongoose';
const { Schema } = mongoose;
import Recipe from './recipeModel.js';
import Review from './reviewModel.js';


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]


}, {
    timestamps: true //Options: creates at and updated at 
})

userSchema.pre('findOneAndDelete', async function(next) {
  const userId = this.getQuery()["_id"];
  try {
    // Delete all recipes created by this user
    await Recipe.deleteMany({ author: userId });
    // Delete all reviews created by this user
    await Review.deleteMany({ user: userId });
    next();
  } catch (error) {
    next(error);
  }
});

export default mongoose.model("User", userSchema)