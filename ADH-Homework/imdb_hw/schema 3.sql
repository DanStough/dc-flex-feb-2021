CREATE TABLE public.title_basics (
    tconst character varying(16),
    title_type character varying(16),
    primary_title character varying(511),
    original_title character varying(511),
    is_adult boolean,
    start_year integer,
    end_year integer,
    runtime_minutes integer,
    genres character varying(63)
);