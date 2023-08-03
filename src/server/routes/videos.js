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
        select t_video.title as title,t_chapter.title as chapter,t_course.title as course, 
        t_video.link,t_video.video_number
        from t_video
        inner join t_course_chapter on t_course_chapter.id = t_video.id_course_chapter
        inner join t_course on t_course.id = t_course_chapter.id_course
        inner join t_chapter on t_chapter.id = t_course_chapter.id_chapter
        where t_course_chapter.id_course = $1;
        `, [parseInt(req.params.id)])).rows;
        const courseInfo = (await db.query(`select * from t_course where id = $1`, [parseInt(req.params.id)])).rows[0];
        const teacherInfo = (await db.query(`select t_user.email,t_user.fullname from t_course_teacher 
        inner join t_teacher on t_course_teacher.id_teacher = t_teacher.id
        inner join t_user on t_teacher.id_user = t_user.id
        where t_course_teacher.id_course = $1`, [req.params.id])).rows;
        //altered the query result for the videos
        let _videos = new Map();
        videos.map((video) => {
            if (!_videos.has(video.chapter))
                _videos.set(video.chapter, [video]);
            else
                _videos.get(video.chapter).push(video);
        })
        res.json({ videos: Array.from(_videos.entries()), courseInfo, teacherInfo });
    } catch (err) {
        res.status(401).send({ msg: 'Permission denied !' });
    }
});

module.exports = router;
