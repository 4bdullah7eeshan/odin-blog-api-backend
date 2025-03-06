const asyncHandler = require("express-async-handler");
const prisma = require("../prisma/client");

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
    const newPost = await prisma.post.create({
        data: newPostData,
    });

    res.status(200).json(newPost);
});


// R: Read
const getAPostById = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const post = await prisma.post.findUnique({
        where: {
            postId: postId,
        },
    });

    res.status(200).json(post);

});




const getAllPosts = asyncHandler(async (req, res) => {
    const allPosts = await prisma.post.findMany();

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

});

// D: Delete
const deleteAPostById = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const deletedPost = await prisma.post.delete({
        where: {
            postId: postId,
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