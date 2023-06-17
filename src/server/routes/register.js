const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../config/db');
// @route => /register
// @desc => Add a new user
// @access => Public

router.post(
    '/',
    [
        check('fullname')
            .not()
            .isEmpty()
            .withMessage("Username shouldn't be empty !"),
        check('pass')
            .isLength({ min: 3, max: 15 })
            .withMessage('You should add a password between 6 and 15 chars !'),
        check('email').isEmail().withMessage('You need to enter a valid email !'),
        check('rpass')
            .custom((value, { req }) => {
                if (value !== req.body.pass) {
                    throw new Error('Your passwords do not match.');
                }
                return true;
            }),
    ],
    async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty())
            return res.status(500).send({ err: err.array() });
        try {
            const { fullname, pass, email } = req.body;
            const record = await db.query(
                `select * from t_user where email=$1;`,
                [email]
            );
            const user = record.rows[0];
            if (user !== undefined)
                return res.status(409).send({ err: 'Already in the db !' });
            const salt = await bcrypt.genSalt(10);
            const safePassword = await bcrypt.hash(pass, salt);
            await db.query(
                `insert into t_user(fullname,password,email)values($1,$2,$3);`,
                [fullname, safePassword, email]
            );
            return res.status(200).send();
        } catch (err) {
            res.status(500).send({ err: 'Server error .' });
        }
    }
);
module.exports = router;