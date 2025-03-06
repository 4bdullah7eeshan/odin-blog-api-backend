const { Router } = express();
const { verifyJwtToken } = require("../middlewares/verifyJwtToken");
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


postRouter.post("/", verifyJwtToken, createANewPost); // Create a new post

postRouter.put("/:postId", verifyJwtToken, updateAPostById); // Update a single post by id

postRouter.delete("/:postId", verifyJwtToken, deleteAPostById); // Delete a single post by id

///

postRouter.get("/:postId/comments", getAllCommentsOfAPost); // Get all comments of a post with postId
//postRouter.get("/:postId/comments/:commentId"); // Not needed though..Get a single comments of a post with postId

postRouter.post("/:postId/comments", verifyJwtToken, createANewCommentToAPostByAUser); // Create a new comment

postRouter.put("/:postId/comments/:commentId", verifyJwtToken, updateACommentOnAPostByAUser); // edit

postRouter.delete("/:postId/comments", verifyJwtToken, deleteAllCommentsOfAPost); // Delete all ..
postRouter.delete("/:postId/comments/:commentId", verifyJwtToken, deleteACommentOfAPostByAUser); // Create a new comment


module.exports = postRouter;