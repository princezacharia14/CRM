require('dotenv').config();
const express = require('express');
const createOrder = require('./create');
const getOrder = require('./get.controller');
const router = express.Router();

router.post('/order', (req, res) => { return createOrder(req, res)});
router.get('/order/:id', (req, res) => { return getOrder(req, res)});

module.exports = router;