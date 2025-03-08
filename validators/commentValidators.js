const { param }= require("express-validator")

const validateCommentId = [
    param("commentId")
        .isInt()
        .withMessage("Post ID must be an integer")
];

// what else to validate??

module.exports = {
    validateCommentId,
}
