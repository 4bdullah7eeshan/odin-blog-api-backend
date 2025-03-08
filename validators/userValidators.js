const { body }= require("express-validators")

const validateUserSignUp = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .hasLength({ min: 3, max: 10 })
        .withMessage("Username must be of a minimum 3 and a maximum of 10 characters!")
        .escape()
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters!")
        .escape()
];

const validateUserSignIn = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .escape()
    body("password")
        .notEmpty()
        .withMessage("Password is required!")
        .escape()
];

module.exports = {
    validateUserSignUp,
    validateUserSignIn,
}
