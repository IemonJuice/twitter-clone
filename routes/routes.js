const express = require('express');
const router = express.Router();
const {addPost} = require('../controllers/CRUDController')
const {readAllPosts} = require('../controllers/CRUDController')
const {editPost} = require('../controllers/CRUDController')
const {deletePost} = require('../controllers/CRUDController')


router.get('/posts', readAllPosts);
router.post('/add', addPost);
router.put('/edit', editPost);
router.delete('/delete', deletePost);

module.exports = router;