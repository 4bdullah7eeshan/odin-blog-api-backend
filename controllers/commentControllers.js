const asyncHandler = require("express-async-handler");
const prisma = require("../prisma/client");

// C: Create
const createANewCommentToAPostByAUser = asyncHandler(async (req, res) => {
    const { commentData } = req.body;
    // no need of req.params for the post id, we can place it in the body
    // data must be structured as follows when recieved:
    // {
    //   content: 'the comment',
    //   postId: 'Post id'
    //   commentatorId: 'the author id'
    // }

    const newComment = await prisma.comment.create({
        data: commentData,
    });

    res.status(200).json(newComment);


});


// R: Read
const getAllCommentsOfAPost = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const allComments = await prisma.comment.findMany({
        where: {
            postId: postId,
        },
    });

    res.status(200).json(allComments);
    

});

// U: Update
const updateACommentOnAPostByAUser = asyncHandler(async (req, res) => {

});

// D: Delete
const deleteACommentOfAPostByAUser = asyncHandler(async (req, res) => {
    const { postId, commentId } = req.params;

    const deletedComment = await prisma.comment.delete({
        where: {
            postId: postId,
            commentId: commentId,
        },
    });

    res.status(200).json(); // later

});

const deleteAllCommentsOfAPost = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const allDeletedComments = await prisma.comment.deleteMany({
        where: {
            postId: postId,
        },
    });

    res.status(200).json(); // later

});

module.exports = {
    getAllCommentsOfAPost,
    createANewCommentToAPostByAUser,
    updateACommentOnAPostByAUser,
    deleteAllCommentsOfAPost,
    deleteACommentOfAPostByAUser,
    
}