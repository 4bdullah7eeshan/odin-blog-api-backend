const asyncHandler = require("express-async-handler");
const { prismaClient } = require("../prisma/client");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

// C: Create
const createANewPost = asyncHandler(async (req, res) => {
    // createANewPostByAuthor
    const newPostData = req.body;
    // data must be structured as follows when recieved:
    // {
    //   title: 'Title',
    //   content: 'Post content'
    //   authorId: 'the author id'
    // }
    const newPost = await prismaClient.post.create({
        data: newPostData,
    });

    res.status(200).json(newPost);
});


// R: Read
const getAPostById = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const post = await prismaClient.post.findUnique({
        where: {
            postId: postId,
        },
    });

    if (!post) {
        throw new CustomNotFoundError("Post not found");
    }

    res.status(200).json(post);

});




const getAllPosts = asyncHandler(async (req, res) => {
    const allPosts = await prismaClient.post.findMany();

    // paginate later
    res.status(200).json(allPosts);


});

// U: Update
const updateAPostById = asyncHandler(async (req, res) => {

    // These should be here adhering to best REST practices. Of course need to modify it
    // const publishAPostById = asyncHandler(async (req, res) => {

    // });
    
    // const unpublishAPostById = asyncHandler(async (req, res) => {
    
    // });
    const { postId } = req.params; // id of post to be updated. is there in params.
    const updatedPostData = req.body; // must be received as required...

    // handle validations later
    

    const updatedPost = await prismaClient.post.update({
        where: {
            id: postId, // should i just pass the whole req.params instead??
        },
        data: updatedPostData,
    });

    res.status(200).json(updatedPost);



});

// D: Delete
const deleteAPostById = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const deletedPost = await prismaClient.post.delete({
        where: {
            id: postId,
        },
    });

    res.status(200).json(); // think what json to return here

});



module.exports = {
    getAllPosts,
    getAPostById,
    createANewPost,
    updateAPostById,
    deleteAPostById,
    
}