const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const prisma = require("../prisma/client");

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

});

const signOutAUser = asyncHandler(async (req, res) => {

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