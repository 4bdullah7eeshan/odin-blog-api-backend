const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { prismaClient } = require("../prisma/client"); // use destructuring and same var name
const { JWT_SECRET } = require("../config/index");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const CustomUnauthorizedError = require("../errors/CustomUnauthorizedError");
const CustomConflictError = require("../errors/CustomConflictError");


// Think about these later

const createANewUser = asyncHandler(async (req, res) => {
    // goes with sign up route
    // this should be straightforward prisma stuff
    const newUserData = req.body; // no need to be an object

    // I must first check if there is an existing user with the username.
    // If yes, then throw an error? Which? Turns out 409!
    const user = await prismaClient.user.findUnique({
        where: {
            username: newUserData.username, 
        },
    });

    if (user) {
        throw CustomConflictError("User already exists");
    }
    
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUserData.password = hashedPassword;

    // expects required data
    // { username: '', password: '' }

    const newUser = await prismaClient.user.create({
        data: newUserData,
    });

    res.status(200).json(newUser); // think what to return here
    // add res.redirect();
});

const signInAUser = asyncHandler(async (req, res) => {
    const userSignInData = req.body;

    const user = await prismaClient.user.findUnique({
        where: {
            username: userSignInData.username, 
        },
    });

    if (!user) {
        throw new CustomNotFoundError("Author not found");

    }

    const match = await bcrypt.compare(userSignInData.password, user.password);
	
	if (!match) {
        // passwords do not match!
        throw new CustomUnauthorizedError("Incorrect password");

    }

    // need to set this syncho...
    try {
        const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: "1h" });
        
        res.status(200).json({
            token,
            user: user,
            expiresIn: 3600 // Seconds (1 hour)
        });

    } catch (err) {
        console.error("JWT signing error:", err);
        res.status(500).json({ message: "Authentication failed" }); // use custom errors
    }


});

const signOutAUser = asyncHandler(async (req, res) => {
    // JWT logout is client-side. Place some minimal stuff here later
    
});

// Just pacing them here because this is where they must belong. 
// Not sure, if I should use them now. If wanna use, setup a subroute/subresource under "users"
const getAllPostsByAUser = asyncHandler(async (req, res) => {

});

const deleteAllPostsOfAUser = asyncHandler(async (req, res) => {

});


module.exports = {
    createANewUser,
    signInAUser,
    signOutAUser,
    
}