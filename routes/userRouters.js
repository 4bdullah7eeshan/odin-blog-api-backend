const { Router } = require("express");
const { validateUserSignUp, validateUserSignIn } = require("../validators/userValidators");
const { handleValidationErrors } = require("../middlewares/handleValidationErrors")
const {
    createANewUser,
    signInAUser,
    signOutAUser
} = require("../controllers/userControllers");

const userRouter = Router();

// Setup routes here
userRouter.post("/sign-up", validateUserSignUp, handleValidationErrors, createANewUser); // Create a new user
userRouter.post("/sign-in", validateUserSignIn, handleValidationErrors, signInAUser);
userRouter.post("/sign-out", signOutAUser);

// Let me tackle other routes later. Need to sort this authentication stuff


module.exports = userRouter;