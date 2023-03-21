require('dotenv').config();
const express = require('express');
const createUser = require('./create');
const router = express.Router();

router.get('/user', (req,res) => { createUser(req, res)});

module.exports = router;