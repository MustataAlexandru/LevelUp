const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const db = require('../config/db');
const config = require('../config/default.json');

// @route => /courses
// @desc => Get the courses
// @access => Private

router.get('/', auth, async (_, res) => {
    try {
        const courses = (await db.query(`select * from t_course`)).rows;
        res.json(courses);
    } catch (err) {
        res.status(500).send({ msg: 'Something went wrong !' });
    }
});

module.exports = router;
