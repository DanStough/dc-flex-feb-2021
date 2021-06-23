# Exercise (Solutions inline)

Clone this repository and follow the instructions in the README:

https://github.com/adamszaruga/imdb

**Use this command to load the data `psql -d imdb < titles.sql` instead of the one provided**

Run some queries on the IMDB data to answer the following questions (Comment here with your answers)

- How many movies are longer than 3 hours long?

```sql
SELECT COUNT(tconst) FROM title_basics 
WHERE runtime_minutes > 180 AND title_type = 'movie';
```

- How many movies came out after the year 2010?

```sql
SELECT COUNT(tconst) FROM title_basics 
WHERE start_year > 2010 AND title_type = 'movie';
```

- What's the imdb ID for "The Dark Knight"

```sql
SELECT tconst FROM title_basics 
WHERE primary_title = 'The Dark Knight' AND title_type = 'movie';
```

- How many movies that came out after 2000 are both Comedies and Horrors? https://www.w3schools.com/sql/sql_wildcards.asp might help for this query

```sql
SELECT COUNT(tconst) FROM title_basics 
WHERE start_year > 2000 AND 
genres LIKE '%Comedy%' AND genres LIKE '%Horror%';
```

- What are the different kinds of title_types in this table? https://www.dofactory.com/sql/select-distinct

```sql
SELECT DISTINCT title_type FROM title_basics;
```

- Of these title_types, which has the most records? The least records? http://www.postgresqltutorial.com/postgresql-count-function/

```sql
SELECT title_type, COUNT(title_type) FROM title_basics 
GROUP BY title_type ORDER BY COUNT(title_type) DESC;
```

- How many entries have separate primary_titles and original_titles

```sql
SELECT COUNT(tconst) FROM title_basics 
WHERE primary_title != original_title;
```

- How many characters long is the longest title? https://w3resource.com/PostgreSQL/length-function.php

```sql
SELECT LENGTH(primary_title) FROM title_basics 
ORDER BY LENGTH(primary_title) DESC LIMIT 1;
```

- How many titles are either documentaries from the 1800s or Comedies from 2018 that are less than one hour long?

```sql
SELECT COUNT(tconst) FROM title_basics 
WHERE (genres LIKE '%Documentary%' AND start_year >=1800 AND start_year < 1900)
OR (genres LIKE '%Comedy%' AND start_year = 2018)
AND runtime_minutes < 60;
```

- My favorite title is tt3467114 . Which title is it?

```sql
SELECT primary_title FROM title_basics 
WHERE tconst = 'tt3467114';
```
