const { Router } = require("express");
const { validatePostId, validatePostContent } = require("../validators/postValidators");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const { verifyJwtToken } = require("../middlewares/verifyJwtToken");
const { 
    getAllPosts,
    getAPostById,
    createANewPost,
    updateAPostById,
    deleteAPostById,
} = require("../controllers/postControllers");
const commentRouter = require("./commentRouters");

const postRouter = Router();

// Setup routes here
postRouter.get("/", getAllPosts); // Get all posts
postRouter.get("/:postId", validatePostId, handleValidationErrors, getAPostById); // Get a single post by id


postRouter.post("/", validatePostId, verifyJwtToken, validatePostContent, handleValidationErrors, createANewPost); // Create a new post

postRouter.put("/:postId", validatePostId, verifyJwtToken, validatePostContent, handleValidationErrors, updateAPostById); // Update a single post by id

postRouter.delete("/:postId", validatePostId, verifyJwtToken, handleValidationErrors, deleteAPostById); // Delete a single post by id

///

postRouter.use("/:postId/comments", commentRouter);

// postRouter.get("/:postId/comments", validatePostId, handleValidationErrors, getAllCommentsOfAPost); // Get all comments of a post with postId
// //postRouter.get("/:postId/comments/:commentId"); // Not needed though..Get a single comments of a post with postId

// postRouter.post("/:postId/comments", verifyJwtToken, validatePostId, validateCommentId, validateCommentText, createANewCommentToAPostByAUser); // Create a new comment

// postRouter.put("/:postId/comments/:commentId", verifyJwtToken, validatePostId, validateCommentId, validateCommentText, updateACommentOnAPost); // edit

// postRouter.delete("/:postId/comments", verifyJwtToken,validatePostId, handleValidationErrors, deleteAllCommentsOfAPost); // Delete all ..
// postRouter.delete("/:postId/comments/:commentId", verifyJwtToken, validatePostId, validateCommentId, handleValidationErrors, deleteACommentOfAPost); // Create a new comment


module.exports = postRouter;