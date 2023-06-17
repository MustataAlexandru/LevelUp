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
-- Name: t_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_user (
    id integer NOT NULL,
    fullname character varying(200) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(60) NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL
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
-- Name: t_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_user ALTER COLUMN id SET DEFAULT nextval('public.t_user_id_seq'::regclass);


--
-- Data for Name: t_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_user (id, fullname, email, password, date) FROM stdin;
1	Robert	trasca.robert2003@gmail.com	$2a$10$7aR0T/9EEswa0uSv1SlLyOb1uqQ/1w2dseP1bCrJH7ZtXi7iWC5iK	2023-06-17 13:51:37.745895+03
2	Robert Trasca	r_trasca2003@yahoo.com	$2a$10$ehtNWuYUeMGOedOkqrmEw.lgr2q/dQMuF4izeIvSGB3EP/uGQoXpq	2023-06-17 13:53:53.729333+03
3	Popescu Alexandru	popescu@yahoo.com	$2a$10$GSXxbo7yqsl42RNR8I8RC.d2vhfEVdmwKla5HZAyksVk1g/OrA6pW	2023-06-17 15:11:31.866392+03
4	Bobert	bobert@yahoo.com	$2a$10$MlI.C3KNj.RXjUpPVRzB0ehzAlWSm2p4s33GXwKLAGm4norvKvt.W	2023-06-17 15:17:53.121791+03
\.


--
-- Name: t_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_user_id_seq', 4, true);


--
-- Name: t_user t_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_user
    ADD CONSTRAINT t_user_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

