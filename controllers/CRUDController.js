const path = require('path');
const Post = require("../schemas/postSchema");
const createPath = (page) => path.resolve('views', page + '.html');

async function addPost(req, res) {
    const { name, text, author } = req.body;
    const newPost = new Post({
        name: name,
        text: text,
        author: author,
    });

    try {
        const savedPost = await newPost.save();
        console.log('Post added:', savedPost);
        res.status(200).send('Post added');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

async function editPost(req, res) {
    const { name, text, author } = req.body;

    try {
        const result = await Post.updateOne(
            { name: name },
            { $set: { author: author, text: text } }
        );
        console.log('Request body:', req.body);

        if (result.nModified > 0) {
            console.log('Post updated successfully');
            res.status(200).send('Post updated successfully');
        } else {
            console.log('No post was updated');
            res.status(404).send('No post was updated');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
}
async function deletePost(req, res) {
    let result = await Post.deleteOne({name: req.body.name})
    console.log(req.body.name);
    try{
        if(result.deletedCount > 0) {
            console.log('success' + result);
            res.status(200).send('Post deleted successfully');

        }
        else{
            console.log('not success');
            res.status(404).send('No post was deleted');
        }
    }
    catch(err){
        res.status(500).send('Internal Server Error');
    }
}


function readAllPosts(req, res) {
    res.sendFile(createPath('form'));
}

module.exports = {
    addPost,
    readAllPosts,
    editPost,
    deletePost
};
