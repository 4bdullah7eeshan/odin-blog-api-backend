const { param, body }= require("express-validator")

const validateCommentId = [
    param("commentId")
        .isInt({ min: 1 })
        .withMessage("Post ID must be an integer")
];

// what else to validate??
const validateCommentText = [
    body("content")
      .trim()
      .notEmpty()
      .withMessage("Comment text is required")
      .isLength({ max: 200 }),
    body("postId")
        .isInt()
        .withMessage("Associated post ID must be an integer"),
    body("commentatorId")
        .isInt()
        .withMessage("Commentator ID must be an integer")
  ];

module.exports = {
    validateCommentId,
    validateCommentText,
}
