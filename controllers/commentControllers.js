const asyncHandler = require("express-async-handler");
const prisma = require("../prisma/client");

// C: Create
const createANewCommentToAPostByAUser = asyncHandler(async (req, res) => {
    const { postId, userId } = req.params;

    const comment = await prisma.comment.create({
        data: {
            content: 
        }
    })


});


// R: Read
const getAllCommentsOfAPost = asyncHandler(async (req, res) => {

});

// U: Update
const updateACommentByUser = asyncHandler(async (req, res) => {

});

// D: Delete
const deleteACommentOfAPostByAUser = asyncHandler(async (req, res) => {

});

const deleteAllCommentsOfAPost = asyncHandler(async (req, res) => {

});

module.exports = {
    
}