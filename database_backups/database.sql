--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Ubuntu 15.2-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.2 (Ubuntu 15.2-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: t_course; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_course (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    description text NOT NULL
);


ALTER TABLE public.t_course OWNER TO postgres;

--
-- Name: t_course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_course_id_seq OWNER TO postgres;

--
-- Name: t_course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_course_id_seq OWNED BY public.t_course.id;


--
-- Name: t_course_teacher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_course_teacher (
    id integer NOT NULL,
    id_course integer NOT NULL,
    id_teacher integer NOT NULL
);


ALTER TABLE public.t_course_teacher OWNER TO postgres;

--
-- Name: t_course_teacher_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_course_teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_course_teacher_id_seq OWNER TO postgres;

--
-- Name: t_course_teacher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_course_teacher_id_seq OWNED BY public.t_course_teacher.id;


--
-- Name: t_teacher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_teacher (
    id integer NOT NULL,
    id_user integer NOT NULL
);


ALTER TABLE public.t_teacher OWNER TO postgres;

--
-- Name: t_teacher_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_teacher_id_seq OWNER TO postgres;

--
-- Name: t_teacher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_teacher_id_seq OWNED BY public.t_teacher.id;


--
-- Name: t_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_user (
    id integer NOT NULL,
    fullname character varying(200) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(60) NOT NULL
);


ALTER TABLE public.t_user OWNER TO postgres;

--
-- Name: t_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_user_id_seq OWNER TO postgres;

--
-- Name: t_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_user_id_seq OWNED BY public.t_user.id;


--
-- Name: t_video; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_video (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    id_course integer NOT NULL
);


ALTER TABLE public.t_video OWNER TO postgres;

--
-- Name: t_video_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_video_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_video_id_seq OWNER TO postgres;

--
-- Name: t_video_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_video_id_seq OWNED BY public.t_video.id;


--
-- Name: t_course id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_course ALTER COLUMN id SET DEFAULT nextval('public.t_course_id_seq'::regclass);


--
-- Name: t_course_teacher id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_course_teacher ALTER COLUMN id SET DEFAULT nextval('public.t_course_teacher_id_seq'::regclass);


--
-- Name: t_teacher id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_teacher ALTER COLUMN id SET DEFAULT nextval('public.t_teacher_id_seq'::regclass);


--
-- Name: t_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_user ALTER COLUMN id SET DEFAULT nextval('public.t_user_id_seq'::regclass);


--
-- Name: t_video id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_video ALTER COLUMN id SET DEFAULT nextval('public.t_video_id_seq'::regclass);


--
-- Data for Name: t_course; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_course (id, title, description) FROM stdin;
1	Python Basics	Learn the fundamentals of Python programming language.
2	JavaScript Crash Course	Get up to speed with JavaScript essentials.
3	Java Programming 101	Introduction to Java programming for beginners.
4	C++ Masterclass	In-depth course on C++ programming.
5	Web Development with HTML and CSS	Build responsive websites using HTML and CSS.
6	Data Structures and Algorithms in Python	Learn about essential data structures and algorithms using Python.
7	Ruby on Rails for Beginners	Start your journey in web development with Ruby on Rails.
8	Mobile App Development with React Native	Create cross-platform mobile applications using React Native.
9	Database Design and SQL	Master the art of designing databases and writing SQL queries.
10	Machine Learning with Python	Explore the world of machine learning and its applications with Python.
\.


--
-- Data for Name: t_course_teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_course_teacher (id, id_course, id_teacher) FROM stdin;
1	1	1
2	2	1
3	3	1
4	4	1
5	5	1
6	6	1
7	7	1
8	8	1
9	9	1
10	10	1
\.


--
-- Data for Name: t_teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_teacher (id, id_user) FROM stdin;
1	47
\.


--
-- Data for Name: t_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_user (id, fullname, email, password) FROM stdin;
9	Trasca Robert-Valentin	trasca.robert2003@gmail.com	$2a$10$OX6OAxDdncIojGiuZtRWM.KR0CBaXJDmmn/XQAVar6pk0GMQEIT82
10	Bobert	r_trasca2003@yahoo.com	$2a$10$JizQAqiuwe.g1DG.NMwSAuj8uQeTVgcTkyOgFa4M.tCokdDhsKzhC
43	full name	roby@yahoo.com	$2a$10$nZqVdoZDEefcwa.BhNxFGu38x9owOqzh9Kupseiao24KEw/QIU5bu
44	Roberto	trasca2003@yahoo.com	$2a$10$PfNq/ifW5knJywR.OalecugEBqGBN8wuKWr3KSD4bveTRVOvr00Va
45	new	bos@yahoo.com	$2a$10$ERau0xxkVQ9FgQECbPSe1eVcSixa1KjbiazGHjRZPNrBBjE1DeNv2
46	asdasd	r@yahoo.com	$2a$10$bLMNOJhB1FkHjILj2TyeeuhIq6Bl2Ofpw7I3tn1RoE4Pw9hvmaPmG
47	alex	alex@yahoo.com	$2a$10$muwraFCqiFzEU5x0Vaf/rOFXsPopsSBCwsUoOLkznDMiLOgaBQFv.
\.


--
-- Data for Name: t_video; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_video (id, title, id_course) FROM stdin;
1	Introduction	1
2	Variables and Data Types	1
3	Control Flow	1
4	Functions	1
5	File Handling	1
6	Introduction	2
7	Variables and Data Types	2
8	Functions	2
9	Arrays	2
10	DOM Manipulation	2
11	Introduction	3
12	Variables and Data Types	3
13	Control Flow	3
14	Object-Oriented Programming	3
15	Exception Handling	3
16	Introduction	4
17	Variables and Data Types	4
18	Functions	4
19	Pointers	4
20	Object-Oriented Programming	4
21	Introduction	5
22	HTML Tags and Elements	5
23	CSS Basics	5
24	Layouts and Positioning	5
25	Responsive Design	5
26	Introduction	6
27	Arrays	6
28	Linked Lists	6
29	Stacks and Queues	6
30	Recursion	6
31	Introduction	7
32	Models and Migrations	7
33	Views and Templates	7
34	Controllers and Routing	7
35	Database and ActiveRecord	7
36	Introduction	8
37	Setting Up the Development Environment	8
38	Components and Styling	8
39	Navigation and Routing	8
40	Working with APIs	8
41	Introduction to Databases	9
42	Relational Data Model	9
43	SQL Fundamentals	9
44	Database Normalization	9
45	Query Optimization	9
46	Introduction to Machine Learning	10
47	Supervised Learning	10
48	Unsupervised Learning	10
49	Model Evaluation and Validation	10
50	Deep Learning and Neural Networks	10
\.


--
-- Name: t_course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_course_id_seq', 10, true);


--
-- Name: t_course_teacher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_course_teacher_id_seq', 33, true);


--
-- Name: t_teacher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_teacher_id_seq', 1, true);


--
-- Name: t_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_user_id_seq', 47, true);


--
-- Name: t_video_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_video_id_seq', 50, true);


--
-- Name: t_course t_course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_course
    ADD CONSTRAINT t_course_pkey PRIMARY KEY (id);


--
-- Name: t_course_teacher t_course_teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_course_teacher
    ADD CONSTRAINT t_course_teacher_pkey PRIMARY KEY (id);


--
-- Name: t_teacher t_teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_teacher
    ADD CONSTRAINT t_teacher_pkey PRIMARY KEY (id);


--
-- Name: t_user t_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_user
    ADD CONSTRAINT t_user_pkey PRIMARY KEY (id);


--
-- Name: t_video t_video_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_video
    ADD CONSTRAINT t_video_pkey PRIMARY KEY (id);


--
-- Name: t_course_teacher t_course_teacher_id_course_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_course_teacher
    ADD CONSTRAINT t_course_teacher_id_course_fkey FOREIGN KEY (id_course) REFERENCES public.t_course(id);


--
-- Name: t_course_teacher t_course_teacher_id_teacher_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_course_teacher
    ADD CONSTRAINT t_course_teacher_id_teacher_fkey FOREIGN KEY (id_teacher) REFERENCES public.t_teacher(id);


--
-- Name: t_teacher t_teacher_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_teacher
    ADD CONSTRAINT t_teacher_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.t_user(id);


--
-- Name: t_video t_video_id_course_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_video
    ADD CONSTRAINT t_video_id_course_fkey FOREIGN KEY (id_course) REFERENCES public.t_course(id);


--
-- PostgreSQL database dump complete
--

