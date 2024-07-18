import User from "../models/userModel.js";

export const getUser = async (req, res, next) => {
    const userId = req.params.id
    try {
        const user = await User.findById(userId);
        if (!user)
            return next(createError(404, "Recipe not found"))

        res.status(200).send(user);
    } catch (error) {
        next(error)
    }
}
export const editprofile = async (req, res, next) => {

    console.log(req.body);


}