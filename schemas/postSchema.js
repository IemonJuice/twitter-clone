const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    text: String,
    author: String
}, { collection: 'posts' });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
