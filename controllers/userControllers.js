const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma/client");
const { JWT_SECRET } = require("../config/index");


// Think about these later

const createANewUser = asyncHandler(async (req, res) => {
    // goes with sign up route
    // this should be straightforward prisma stuff
    const { newUserData } = req.body;
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUserData.password = hashedPassword;

    // expects required data

    const newUser = await prisma.user.create({
        data: newUserData,
    });

    res.status(200).json(newUser);
    // add res.redirect();
});

const signInAUser = asyncHandler(async (req, res) => {
    const { userSignInData } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            username: userSignInData.username, 
        },
    });

    if (!user) {
        // do  stuff here

    }

    const match = await bcrypt.compare(userSignInData.password, user.password);
	
	if (!match) {
        // passwords do not match!

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