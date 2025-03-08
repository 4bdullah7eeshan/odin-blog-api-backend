const { param }= require("express-validator")

const validatePostId = [
    param("postId")
        .isInt()
        .withMessage("Post ID must be an integer")
];

// what else to validate??

module.exports = {
    validatePostId,
}
