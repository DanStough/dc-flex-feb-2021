1) Clone this repository
2) Unzip titles.sql.zip
3) Create a new database called "imdb"
4) In your terminal, run
> ~~`pg_dump imdb < titles.sql`~~ `psql -d imdb < titles.sql`

(This [article](https://www.postgresqltutorial.com/postgresql-restore-database/) talks a little about the differences between the tools. Why can’t there just be one that does everything)

5) Your imdb db should now have a table with 5 million rows of movie data!


https://learn.digitalcrafts.com/flex/lessons/databases/data-modeling/#users-and-posts


Run some queries on the IMDB data to answer the following questions (Comment here with your answers)

- How many movies are longer than 3 hours long?

- How many movies came out after the year 2010?
- What's the imdb ID for "The Dark Knight"
- How many movies that came out after 2000 are both Comedies and Horrors? [https://www.w3schools.com/sql/sql_wildcards.asp](https://www.w3schools.com/sql/sql_wildcards.asp) might help for this query
- What are the different kinds of **title_type**s in this table? [https://www.dofactory.com/sql/select-distinct](https://www.dofactory.com/sql/select-distinct)
- Of these title_types, which has the most records? The least records? [http://www.postgresqltutorial.com/postgresql-count-function/](http://www.postgresqltutorial.com/postgresql-count-function/)
- How many entries have separate **primary_titles** and **original_titles**
- ****How many characters long is the longest title? [https://w3resource.com/PostgreSQL/length-function.php](https://w3resource.com/PostgreSQL/length-function.php)
- How many titles are either documentaries from the 1800s or Comedies from 2018 that are less than one hour long?
- My favorite title is tt3467114 . Which title is it?