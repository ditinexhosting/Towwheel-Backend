const express = require('express');
const router = express.Router();

const Controllers = require('../controllers')
const Auth = Controllers.Auth

/*router.post('/signup',Auth.Signup);
router.post('/login',Auth.Login);
router.put('/set-user-offline',Auth.SetUserOffline);
router.get('/refresh-token/:mobile/:token',Auth.RefreshToken);
router.get('/login-by-token/:mobile/:token',Auth.LoginByToken);
router.get('/check-username/:username',Auth.CheckUsername);*/

module.exports = router;