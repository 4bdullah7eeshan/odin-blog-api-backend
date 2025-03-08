const {
    notEmpty,
    hasLength,
    isUnique,
    doesExists,
} = require("../helpers/validationHelpers");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const { body, query, params }= require("express-validators")

const validateUserSignUp = [
    notEmpty("username"),
    notEmpty("email"),
    notEmpty("password"),
    hasLength("username", 3, 10),
    isUnique("username", "User", "username"),
    hasLength("password", 5, undefined, "Password must be at least 5 characters long"),
    handleValidationErrors,
];

const validateUserSignIn = [
    notEmpty("username"),
    notEmpty("password"),
    doesExists("username", "User", "username"),
    handleValidationErrors,
];

module.exports = {
    validateUserSignUp,
    validateUserSignIn,
}
