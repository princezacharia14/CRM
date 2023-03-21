require('dotenv').config();
const express = require('express');
const loginUser = require('./login');
const router = express.Router();

router.get('/login', (req,res) => { loginUser(req, res)});

module.exports = router;