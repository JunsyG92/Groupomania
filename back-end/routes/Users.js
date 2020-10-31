const express = require('express');
const auth = require('../middleware/auth')
const multer_banner = require('../middleware/multer-banner')
const multer_avatar = require('../middleware/multer-avatar')
const router = express.Router();


const userCtrl = require('../controller/user')

router.post('/auth/signup', userCtrl.signup);
router.post('/auth/login', userCtrl.login);
router.delete('/user/:id', auth, userCtrl.deleteUser);
router.put('/user/identity/:id', auth, userCtrl.updateIdentity);
router.put('/user/password/:id', auth, userCtrl.updatePassword);
router.put('/user/avatar/:id', auth, multer_avatar, userCtrl.updatePicture);
router.put('/user/banner/:id', auth, multer_banner, userCtrl.updateBanner);
router.get('/user/profil/:id', auth, userCtrl.getUser);



module.exports = router