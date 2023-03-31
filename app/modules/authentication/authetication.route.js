const express = require('express');
const router = express.Router();

const createUser = require('./create');
const loginUser = require('./login.controller');

router.post('/user', (req,res) => { return createUser(req, res)});
router.post('/user/login', (req,res) => {return loginUser(req, res)})



module.exports = router;

