const { Router } = express();
// Import Controllers here
// Perhaps, other stuff too

const userRouter = Router();

// Setup routes here
userRouter.post("/"); // Create a new user


module.exports = userRouter;