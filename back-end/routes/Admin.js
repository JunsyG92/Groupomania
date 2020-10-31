const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();


const adminCtrl = require('../controller/admin')

router.get('/:id', auth, adminCtrl.isAdmin)
router.put('/moderate/post/:post_id', auth, adminCtrl.moderationPost)
router.put('/moderate/comment/:post_id/:idComment', auth, adminCtrl.moderationComment)

module.exports = router