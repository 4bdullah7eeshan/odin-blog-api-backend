const asyncHandler = require("express-async-handler");
const prisma = require("../prisma/client");

// C: Create
const createANewPost = asyncHandler(async (req, res) => {
    // createANewPostByAuthor
});

const publishAPostById = asyncHandler(async (req, res) => {

});

const unpublishAPostById = asyncHandler(async (req, res) => {

});

// R: Read
const getAPostById = asyncHandler(async (req, res) => {

});

const getAllPostsByAUser = asyncHandler(async (req, res) => {

});


const getAllPosts = asyncHandler(async (req, res) => {

});

// U: Update
const updateAPostById = asyncHandler(async (req, res) => {

});

// D: Delete
const deleteAPostById = asyncHandler(async (req, res) => {

});

const deleteAllPostsOfAUser = asyncHandler(async (req, res) => {

});

module.exports = {
    getAllPosts,
    getAPostById,
    createANewPost,
    updateAPostById,
    deleteAPostById,
    
}