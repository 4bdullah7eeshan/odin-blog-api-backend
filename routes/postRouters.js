const { Router } = express();
const { 
    getAllPosts,
    getAPostById,
    createANewPost,
    updateAPostById,
    deleteAPostById,
} = require("../controllers/postControllers");
const {
    getAllCommentsOfAPost,
    createANewCommentToAPostByAUser,
    updateACommentOnAPostByAUser,
    deleteAllCommentsOfAPost,
    deleteACommentOfAPostByAUser
} = require("../controllers/commentControllers");

const postRouter = Router();

// Setup routes here
postRouter.get("/", getAllPosts); // Get all posts
postRouter.get("/:postId", getAPostById); // Get a single post by id


postRouter.post("/", createANewPost); // Create a new post

postRouter.put("/:postId", updateAPostById); // Update a single post by id

postRouter.delete("/:postId", deleteAPostById); // Delete a single post by id

///

postRouter.get("/:postId/comments", getAllCommentsOfAPost); // Get all comments of a post with postId
//postRouter.get("/:postId/comments/:commentId"); // Not needed though..Get a single comments of a post with postId

postRouter.post("/:postId/comments", createANewCommentToAPostByAUser); // Create a new comment

postRouter.put("/:postId/comments/:commentId", updateACommentOnAPostByAUser); // edit

postRouter.delete("/:postId/comments", deleteAllCommentsOfAPost); // Delete all ..
postRouter.delete("/:postId/comments/:commentId", deleteACommentOfAPostByAUser); // Create a new comment


module.exports = postRouter;