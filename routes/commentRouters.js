const { Router } = require("express");
const { validateCommentId, validateCommentText } = require("../validators/commentValidators");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const { verifyJwtToken } = require("../middlewares/verifyJwtToken");
const {
    getAllCommentsOfAPost,
    createANewCommentToAPostByAUser,
    updateACommentOnAPost,
    deleteAllCommentsOfAPost,
    deleteACommentOfAPost
} = require("../controllers/commentControllers");

const commentRouter = Router({mergeParams: true});

commentRouter.get("/", handleValidationErrors, getAllCommentsOfAPost); // Get all comments of a post with postId
//postRouter.get("/:postId/comments/:commentId"); // Not needed though..Get a single comments of a post with postId

commentRouter.post("/", verifyJwtToken, validateCommentId, validateCommentText, createANewCommentToAPostByAUser); // Create a new comment

commentRouter.put("/:commentId", verifyJwtToken, validateCommentId, validateCommentText, updateACommentOnAPost); // edit

commentRouter.delete("/", verifyJwtToken, deleteAllCommentsOfAPost); // Delete all .. ONLY author sd do it
commentRouter.delete("/:commentId", verifyJwtToken, validateCommentId, handleValidationErrors, deleteACommentOfAPost); // Create a new comment

module.exports = commentRouter;