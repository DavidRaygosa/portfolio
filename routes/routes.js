'use strict'

var express = require('express');

// Controllers

var EmailController = require('../controllers/controller_email');

var router = express.Router();

// MiddleWare

var multipart = require('connect-multiparty');
var multipartMiddleWarePosts = multipart({uploadDir: './uploads/posts'});

// Routes

	// Email
		router.post('/send-email', EmailController.sendEmail);

module.exports = router;