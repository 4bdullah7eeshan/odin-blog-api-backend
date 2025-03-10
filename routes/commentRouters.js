const { Router } = require("express");
const { validateCommentId, validateCommentText } = require("../validators/commentValidators");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const { verifyJwtToken } = require("../middlewares/verifyJwtToken");
const {
    createANewCommentToAPostByAUser,
    updateACommentOnAPost,
    deleteACommentOfAPost
} = require("../controllers/commentControllers");
const {
    getComments,
    deleteComments
} = require("../controllers/commentContextControllers");

const commentRouter = Router({mergeParams: true});

commentRouter.get("/", getComments); // Get all comments of a post with postId
//postRouter.get("/:postId/comments/:commentId"); // Not needed though..Get a single comments of a post with postId

commentRouter.post("/", verifyJwtToken, validateCommentText, handleValidationErrors, createANewCommentToAPostByAUser); // Create a new comment

commentRouter.put("/:commentId", verifyJwtToken, validateCommentId, validateCommentText, handleValidationErrors, updateACommentOnAPost); // edit

commentRouter.delete("/", verifyJwtToken, deleteComments); // Delete all .. ONLY author sd do it
commentRouter.delete("/:commentId", verifyJwtToken, validateCommentId, handleValidationErrors, deleteACommentOfAPost); // Create a new comment

module.exports = commentRouter;