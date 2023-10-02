const postService = require('../services/post');

const createPost = async (req, res) => {
    const newPost = await postService.createPost(req.body.title, req.body.date, req.body.location, req.body.who, req.body.body, req.body.published);
    res.json(newPost);
};

const getPosts = async (req, res) => {
    const posts = await postService.getPosts();
    res.render('posts.ejs', {posts : posts})
    // res.json(posts);
};

const getPost = async (req, res) => {
    const post = await postService.getPostById(req.params.id);
    if (!post) {
        return res.status(404).json({ errors: ['Post not found']});
    }

    res.json(post);
};

const updatePost = async (req, res) => {
    if (!req.body.title || !req.body.date || !req.body.location || !req.body.who) {
        return res.status(400).json({ message: 'Missing required field',});
    }

    const post = await postService.updatePost(req.params.id, req.body.title, req.body.date, req.body.location, req.body.who, req.body.body);
    if (!post) {
        return res.status(404).json({ errors: ['Post not found']});
    }

    res.json(post);
};

const deletePost = async (req, res) => {
    const post = await postService.deletePost(req.params.id);
    if (!post) {
        return res.status(404).json({ errors: ['Post not found']});
    }

    res.send();
};

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
};