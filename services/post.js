const Post = require('../models/post')

const createPost = async (title, body) => {
    const post = new Post({
        title : title
    });

    if (body)
        post.body = body;

    return await post.save();
};

const getPostById = async (id) => {
    return await Post.findById(id);
};

const getPostsByAuthor = async (author) => {
    return await Post.find({author: author});
}

const getPosts = async () => {
    return await Post.find({});
};

const updatePost = async(id, title, body) => {
    const post = await getPostById(id);
    if (!post)
        return null;

    post.title = title;
    post.body = body;
    await post.save();
    return post;
};

const deletePost = async (id) => {
    const post = await getPostById(id);
    if (!post)
        return null;

    await post.remove();
    return post;
};

module.exports = {
    createPost,
    getPostById,
    getPostsByAuthor,
    getPosts,
    updatePost,
    deletePost
}

