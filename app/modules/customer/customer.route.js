require('dotenv').config();
const express = require('express');
const createCustomer = require('./create.controller');
const getACustomer = require('./get.controller');
const router = express.Router();

router.post('/customer', (req, res) => { return createCustomer(req, res)});
router.get('/customer/:id', (req, res) => { return getACustomer(req, res)});

module.exports = router;