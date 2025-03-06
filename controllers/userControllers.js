const asyncHandler = require("express-async-handler");
const prisma = require("../prisma/client");

// Think about these later

// Just pacing them here because this is where they must belong. 
// Not sure, if I should use them now. If wanna use, setup a subroute/subresource under "users"
const getAllPostsByAUser = asyncHandler(async (req, res) => {

});

const deleteAllPostsOfAUser = asyncHandler(async (req, res) => {

});


module.exports = {
    
}