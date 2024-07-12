import mongoose from 'mongoose';
const { Schema } = mongoose;

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
    likedRecipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    followedAccounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],


}, {
    timestamps: true //Options: creates at and updated at 
})

export default mongoose.model("User", userSchema)