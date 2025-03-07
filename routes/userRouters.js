const { Router } = require("express");
const userValidators = require("../validators/userValidators");
const {
    createANewUser,
    signInAUser,
    signOutAUser
} = require("../controllers/userControllers");

const userRouter = Router();

// Setup routes here
userRouter.post("/sign-up", userValidators.validateUserSignIn, createANewUser); // Create a new user
userRouter.post("/sign-in", userValidators.validateUserSignIn, signInAUser);
userRouter.post("/sign-out", signOutAUser);

// Let me tackle other routes later. Need to sort this authentication stuff


module.exports = userRouter;