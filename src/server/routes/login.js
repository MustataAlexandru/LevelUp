const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const auth = require('../middlewares/auth');
const db = require('../config/db');
const config = require('../config/default.json');
// @route => /login
// @desc => Get the user
// @access => Private
router.get('/', auth, async (req, res) => {
    try {
        const { email } = req.user;
        const result = await db.query(
            `select id,fullname,email,date from t_user where email=$1`,
            [email]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(401).send({ msg: 'Permission denied !' });
    }
});

// @route => /login
// @desc => Log the user
// @access => Public

router.post(
    '/',
    [
        check('email')
            .not()
            .isEmpty()
            .withMessage("Username shouldn't be empty !"),
        check('pass')
            .isLength({ min: 0, max: 15 })
            .withMessage('You should add a password between 6 and 15 chars !'),
    ],
    async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).send({ err: err.array() });
        try {
            const { email, pass } = req.body;
            const record = await db.query(`select * from t_user where email=$1;`, [email]);
            const user = record.rows[0];
            if (user) {
                isMatch = await bcrypt.compare(pass, user.password);
                if (!isMatch)
                    return res.status(400).send({ err: 'Invalid credentials .' });
            } else return res.status(400).send({ err: 'Invalid credentials .' });

            let payload = {
                email
            };
            const token = jwt.sign(payload, config.jwtSecret, {
                expiresIn: '2h',
            });
            return res.json({ token });
        } catch (err) {
            res.status(500).send({ err: 'Server error !' });
        }
    }
);


module.exports = router;