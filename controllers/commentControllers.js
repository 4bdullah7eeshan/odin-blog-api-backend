const asyncHandler = require("express-async-handler");
const { prismaClient } = require("../prisma/client");

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

    const newComment = await prismaClient.comment.create({
        data: commentData,
    });

    res.status(200).json(newComment);


});


// R: Read
const getAllCommentsOfAPost = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const allComments = await prismaClient.comment.findMany({
        where: {
            postId: postId,
        },
    });

    res.status(200).json(allComments);
    

});

// U: Update
const updateACommentOnAPost = asyncHandler(async (req, res) => {
    const commentOfAPostToBeUpdated = req.params
    const updatedCommentData = req.body;

    const updatedCommentOnAPost = await prismaClient.comment.update({
        where: {
            commentOfAPostToBeUpdated,
        },
        data: {
            updatedCommentData,
        },
    });

});

// D: Delete
const deleteACommentOfAPost = asyncHandler(async (req, res) => {
    const { postId, commentId } = req.params;

    const deletedComment = await prismaClient.comment.delete({
        where: {
            postId: postId,
            commentId: commentId,
        },
    });

    res.status(200).json(); // later

});

const deleteAllCommentsOfAPost = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const allDeletedComments = await prismaClient.comment.deleteMany({
        where: {
            postId: postId,
        },
    });

    res.status(200).json(); // later

});

module.exports = {
    getAllCommentsOfAPost,
    createANewCommentToAPostByAUser,
    updateACommentOnAPost,
    deleteAllCommentsOfAPost,
    deleteACommentOfAPost,
    
}