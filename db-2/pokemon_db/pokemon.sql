--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

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
-- Name: pokemon; Type: TABLE; Schema: public; Owner: heggy
--

CREATE TABLE public.pokemon (
    id integer NOT NULL,
    name character varying(128),
    type character varying(128),
    evolvesfromid integer
);


ALTER TABLE public.pokemon OWNER TO heggy;

--
-- Name: pokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: heggy
--

CREATE SEQUENCE public.pokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokemon_id_seq OWNER TO heggy;

--
-- Name: pokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: heggy
--

ALTER SEQUENCE public.pokemon_id_seq OWNED BY public.pokemon.id;


--
-- Name: trainers; Type: TABLE; Schema: public; Owner: heggy
--

CREATE TABLE public.trainers (
    id integer NOT NULL,
    name character varying(128),
    isgymleader boolean,
    pokemonslot1 integer,
    pokemonslot2 integer,
    pokemonslot3 integer,
    pokemonslot4 integer,
    pokemonslot5 integer,
    pokemonslot6 integer
);


ALTER TABLE public.trainers OWNER TO heggy;

--
-- Name: trainers_id_seq; Type: SEQUENCE; Schema: public; Owner: heggy
--

CREATE SEQUENCE public.trainers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trainers_id_seq OWNER TO heggy;

--
-- Name: trainers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: heggy
--

ALTER SEQUENCE public.trainers_id_seq OWNED BY public.trainers.id;


--
-- Name: pokemon id; Type: DEFAULT; Schema: public; Owner: heggy
--

ALTER TABLE ONLY public.pokemon ALTER COLUMN id SET DEFAULT nextval('public.pokemon_id_seq'::regclass);


--
-- Name: trainers id; Type: DEFAULT; Schema: public; Owner: heggy
--

ALTER TABLE ONLY public.trainers ALTER COLUMN id SET DEFAULT nextval('public.trainers_id_seq'::regclass);


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: heggy
--

COPY public.pokemon (id, name, type, evolvesfromid) FROM stdin;
1	Bulbasaur	Grass	\N
2	Ivysaur	Grass	1
3	Venusaur	Grass	2
4	Charmander	Fire	\N
5	Charmeleon	Fire	4
6	Charizard	Fire	5
7	Squirtle	Water	\N
8	Wartortle	Water	7
9	Blastoise	Water	8
10	Caterpie	Bug	\N
11	Metapod	Bug	10
12	Butterfree	Bug	11
\.


--
-- Data for Name: trainers; Type: TABLE DATA; Schema: public; Owner: heggy
--

COPY public.trainers (id, name, isgymleader, pokemonslot1, pokemonslot2, pokemonslot3, pokemonslot4, pokemonslot5, pokemonslot6) FROM stdin;
1	Ash	f	1	10	\N	\N	\N	\N
2	Misty	t	7	\N	\N	\N	\N	\N
3	Brock	t	3	6	9	\N	\N	\N
4	Axle	t	2	4	8	\N	\N	\N
5	Moxie	f	1	\N	9	9	9	9
\.


--
-- Name: pokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: heggy
--

SELECT pg_catalog.setval('public.pokemon_id_seq', 12, true);


--
-- Name: trainers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: heggy
--

SELECT pg_catalog.setval('public.trainers_id_seq', 5, true);


--
-- Name: pokemon pokemon_name_key; Type: CONSTRAINT; Schema: public; Owner: heggy
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_name_key UNIQUE (name);


--
-- Name: pokemon pokemon_pkey; Type: CONSTRAINT; Schema: public; Owner: heggy
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pkey PRIMARY KEY (id);


--
-- Name: trainers trainers_pkey; Type: CONSTRAINT; Schema: public; Owner: heggy
--

ALTER TABLE ONLY public.trainers
    ADD CONSTRAINT trainers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

