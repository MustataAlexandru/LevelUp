const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const db = require('../config/db');

// @route => /videos/:id
// @desc => Get the videos of a course by its id
// @access => Private

router.get('/:id', auth, async (req, res) => {
    try {
        const videos = (await db.query(`
        select t_video.title from t_video
        inner join t_course_teacher on t_course_teacher.id_course = t_video.id_course
        inner join t_course on t_course.id = t_course_teacher.id_course
        where t_course.id = $1
        `, [parseInt(req.params.id)])).rows;
        const courseInfo = (await db.query(`select * from t_course where id = $1`, [parseInt(req.params.id)])).rows[0];
        const teacherInfo = (await db.query(`select t_user.email,t_user.fullname from t_course_teacher 
        inner join t_teacher on t_course_teacher.id_teacher = t_teacher.id
        inner join t_user on t_teacher.id_user = t_user.id
        where t_course_teacher.id_course = $1`, [req.params.id])).rows;

        res.json({ videos, courseInfo, teacherInfo });
    } catch (err) {
        res.status(401).send({ msg: 'Permission denied !' });
    }
});

module.exports = router;
