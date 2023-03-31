const express = require('express');
const router = express.Router();

const createUser = require('./create');

router.post('/login', (req,res) => { return createUser(req, res)});



module.exports = router;

