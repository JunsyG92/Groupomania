const express = require('express');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const router = express.Router();


const postCtrl = require('../controller/posts')

router.post('/', auth, multer, postCtrl.createPost);
router.get('/', auth, postCtrl.getAllPosts);
router.get('/profil/:id', auth, postCtrl.getPostsOfCurrentUser);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.post('/:id/like', auth, postCtrl.likePost);
router.get('/liked/:post_id/:user_id', auth, postCtrl.isLiked);
router.post('/:id/dislike', auth, postCtrl.dislikePost);
router.get('/disliked/:post_id/:user_id', auth, postCtrl.isDisliked);
router.get('/:postId/comment', auth, postCtrl.getAllCommentOfPost);
router.post('/:postId/comment', auth, postCtrl.commentPost);
router.put('/:postId/comment/:idComment', auth, postCtrl.modifyCommentPost);
router.delete('/:postId/comment/:idComment', auth, postCtrl.deleteCommentPost);

module.exports = router