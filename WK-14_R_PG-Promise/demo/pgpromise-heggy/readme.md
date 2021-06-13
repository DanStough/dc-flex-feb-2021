# pg promise
> npm install pg-promise
- pg promise doc https://vitaly-t.github.io/pg-promise/


https://github.com/vitaly-t/pg-promise/wiki/connection-syntax

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'my-database-name',
    user: 'user-name',
    password: 'user-password',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn);

❯ npm start


movie result => 
[
  {
    tconst: 'tt0000038',
    title_type: 'short',
    primary_title: 'The Ball Game',
    original_title: 'The Ball Game',
    is_adult: false,
    start_year: 1898,
    end_year: null,
    runtime_minutes: null,
    genres: 'Documentary,Short,Sport'
  }
]

- create db, seed db as a separate script.
* separate the setup from create db
(https://stackoverflow.com/questions/34382796/where-should-i-initialize-pg-promise)

- Use none(query[, values]) - https://vitaly-t.github.io/pg-promise/Database.html - when updating create or insert new data.

- one for only one result
- any for many things from db