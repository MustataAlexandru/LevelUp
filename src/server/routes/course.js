const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const db = require('../config/db');
const config = require('../config/default.json');
// @route => /courses
// @desc => Get the courses
// @access => Private
router.get('/', auth, async (req, res) => {
    try {
        
        res.json(data);
    } catch (err) {
        res.status(401).send({ msg: 'Permission denied !' });
    }
});