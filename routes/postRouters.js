const { Router } = express();
// Import Controllers here
// Perhaps, other stuff too

const postRouter = Router();

// Setup routes here
postRouter.get("/"); // Get all posts
postRouter.get("/:postId"); // Get a single post by id


postRouter.post("/"); // Create a new post

postRouter.put("/:postId"); // Update a single post by id

postRouter.delete("/:postId"); // Delete a single post by id

///

postRouter.get("/:postId/comments"); // Get all comments of a post with postId
postRouter.get("/:postId/comments/:commentId"); // Not needed though..Get a single comments of a post with postId

postRouter.post("/:postId/comments"); // Create a new comment

postRouter.put("/:postId/comments/:commentId"); // edit

postRouter.delete("/:postId/comments"); // Delete all ..
postRouter.delete("/:postId/comments/:commentId"); // Create a new comment


module.exports = postRouter;