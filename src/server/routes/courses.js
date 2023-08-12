const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const db = require('../config/db');

// @route => /courses
// @desc => Get the courses
// @access => Public

router.get('/', async (_, res) => {
    try {
        const courses = (await db.query(`select * from t_course`)).rows;
        res.json(courses);
    } catch (err) {
        res.status(500).send({ msg: 'Something went wrong !' });
    }
});

// @route => /courses
// @desc => Add a course
// @access => Private

router.post('/', auth, async (req, res) => {
    try {
        await db.query('BEGIN');
        const { courseName, description, category, chapters } = req.body;
        let id_category, id_course;
        let arr = [];
        let result = (await db.query(`select * from t_course where title = $1`, [courseName])).rows[0];
        if (result === undefined) {
            result = (await db.query(`select id from t_category where name = $1`, [category])).rows[0];
            if (result === undefined)
                id_category = (await db.query(`insert into t_category(name)values($1) returning id;`, [category])).rows[0].id;
            else
                id_category = result.id;
            id_course = (await db.query(`insert into t_course(title,description,id_category)values($1,$2,$3) returning id;`, [courseName, description, id_category])).rows[0].id;
            for (let i = 0; i < chapters.length; i++) {
                result = (await db.query(`select id from t_chapter where title = $1`, [chapters[i].name])).rows[0];
                let id_chapter;
                if (result === undefined) result = (await db.query(`insert into t_chapter(title)values($1) returning id;`, [chapters[i].name])).rows[0];
                id_chapter = result.id;
                arr.push(id_chapter);
            }
            for (let i = 0; i < chapters.length; i++) {
                const id_course_chapter = (await db.query(`insert into t_course_chapter (id_course,id_chapter)values($1,$2) returning id;`, [id_course, arr[i]])).rows[0].id;
                for (let j = 0; j < chapters[i].videos.length; j++) {
                    let video = chapters[i].videos[j];
                    await db.query(`insert into t_video(title,link,video_number,id_course_chapter)values($1,$2,$3,$4);`, [video.title, video.link, j + 1, id_course_chapter]);
                }
            }
            await db.query('COMMIT');
        } else console.log('already there !');
        return res.status(200).send();
    } catch (error) {
        await db.query('ROLLBACK');
        res.status(500).send({ msg: 'Something went wrong !' });
    }
});

module.exports = router;