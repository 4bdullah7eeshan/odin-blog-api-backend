const asyncHandler = require("express-async-handler");
const { deleteAllCommentsOfAPost } = require("./commentControllers");

const {
    getAllCommentsOfAPost,
    getAllComments,
    deleteAllCommentsOfAPost,
    deleteAllComments,
} = require("../controllers/commentControllers");

const getComments = asyncHandler(async (req, res) => {

    if (req.params.postId) {
        return getAllCommentsOfAPost;
    } else {
        return getAllComments;
    }

});


// Don't need these:
// const getAComment = asyncHandler(async (req, res) => {

// });

// const createAComment = asyncHandler(async (req, res) => {

// });


// const updateAComment = asyncHandler(async (req, res) => {

// });

const deleteComments = asyncHandler(async (req, res) => {

    if (req.query.postId) {
        return deleteAllCommentsOfAPost;
    } else {
        return deleteAllComments;
    }

});

module.exports = {
    getComments,
    deleteComments,
}