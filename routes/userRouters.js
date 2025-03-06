const { Router } = express();
// Import Controllers here
// Perhaps, other stuff too

const userRouter = Router();

// Setup routes here
userRouter.post("/sign-up"); // Create a new user
userRouter.post("/sign-in");
userRouter.post("/sign-out");

// Let me tackle other routes later. Need to sort this authentication stuff


module.exports = userRouter;