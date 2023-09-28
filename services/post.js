const Post = require('../models/post')

const createPost = async (title, date, location, who, body, published) => {
    const post = new Post({
        title : title,
        date : date,
        location : location,
        who : who
    });

    if (body)
        post.body = body;
    if (published)
        post.published = published;

    return await post.save();
};

const getPostById = async (id) => {
    return await Post.findById(id);
};

const getPosts = async () => {
    return await Post.find({});
};

const updatePost = async(id, title) => {
    const post = await getPostById(id);
    if (!post)
        return null;

    post.title = title;
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
    getPosts,
    updatePost,
    deletePost
}

