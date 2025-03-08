const { param, body }= require("express-validator")

const validatePostId = [
    param("postId")
        .isInt()
        .withMessage("Post ID must be an integer")
];

// what else to validate??

const validatePostContent = [
    body("title")
      .trim()
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ max: 100 })
      .withMessage("Max title length is 100")
      .escape(),
    body("content")
      .trim()
      .notEmpty()
      .withMessage("Content is required")
      .isLength({ max: 500 })
      .withMessage("Max content length is 500")
      .escape(),
    body("authorId")
        .isInt()
        .withMessage("Author ID must be an integer")
];

module.exports = {
    validatePostId,
    validatePostContent,
}
