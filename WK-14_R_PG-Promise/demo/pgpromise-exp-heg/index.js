const express = require('express');
// [doc](https://vitaly-t.github.io/pg-promise/
const pgp = require('pg-promise')(); // initialize pg-promise

const app = express(); // express server

// database
const cn = {
  host: 'localhost', // where heroku will host
  port: 5432,
  database: 'imdb' // name of database
};
// create db using pgp func, pass config obj as param
const db = pgp(cn)

// good 4 frontend home pg - Not good 4 api endpoint
app.get("/home", async (req, res) => {
  const movies = await db.any("SELECT * FROM title_basics LIMIT 100"); // list of 100 movies - this could a home page
  // I have move array as movies obj
  /**
   *
   * [{
      tconst: 'tt0000100',
      title_type: 'short',
      primary_title: 'Place de la Concorde',
      original_title: 'Place de la Concorde',
      is_adult: false,
      start_year: 1896,
      end_year: null,
      runtime_minutes: null,
      genres: 'Documentary,Short'
      }]
   */
  const moviesTagsArr = movies.map( movie => `
    <li><strong>${movie.primary_title}</strong> (${movie.start_year})</li>
  `);
  const moviesHTML = moviesTagsArr.join("");

  res.send(`<h1>Heggy Movie database Home page</h1>
    <ul>
    ${moviesHTML}
    </ul>
  `);
});

// good api lists json not html
app.get("/movies", async (req, res) => {
  const movies = await db.any("SELECT * FROM title_basics LIMIT 100"); // list of 100 movies - this could a home page
  // movies = Array of movies obj
  /**
   *
   * [{
      tconst: 'tt0000100',
      title_type: 'short',
      primary_title: 'Place de la Concorde',
      original_title: 'Place de la Concorde',
      is_adult: false,
      start_year: 1896,
      end_year: null,
      runtime_minutes: null,
      genres: 'Documentary,Short'
      }, {}, {}]
   */

  res.json(movies);
});

// get a single movie request params
// ex: http://localhost:3001/movies/tt0000001
app.get('/movies/:id', async (req, res) => {
  // obj destructuring let title = req.params.title = heggy
  // sample tconst id tt0000001
  const {id} = req.params;
  let movie;
  
  try {
    // error handling using try { } catch(err) {}
    movie = await db.one("SELECT * FROM title_basics WHERE tconst=$1", [id]);
    res.json(movie);
  }
  catch (err) {
    console.log(id);
    res.status(404).send({"error": "the requested movie id does not exist"});
  }
});

app.get("*", (req, res) => {
  res.send(`<h1>Catch all, you should not be here.</h1>`);
});

app.listen('3001', (req, res) => {
  console.log("starting server on http://localhost:3001");
});