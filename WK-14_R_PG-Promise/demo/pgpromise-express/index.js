const express = require('express');
const pgp = require(`pg-promise`)();

const app = express();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'imdb'
}

const db = pgp(cn)

app.get("/home", async (req, res) => {
    const movies = await db.any("SELECT * FROM title_basics LIMIT 100");

    const movieTags = movies.map((movie) => { return `<li><strong>${movie.original_title}</strong> (${movie.start_year}) </li>` });
    const moviesHTML = movieTags.join("");

    res.send(`<h1>DC Movie Database Homepage</h1>
        <ul>
            ${moviesHTML}
        </ul>
    `)
})

app.get("/movies", async (req, res) => {
    const movies = await db.any("SELECT * FROM title_basics LIMIT 100");

    res.json(movies)
})

app.get("/movies/:id", async (req, res) => {
    const id = req.params.id;
    let movie = "";

    try {
        movie = await db.one("SELECT * FROM title_basics WHERE tconst=$1", [id]);
        res.json(movie)
    }
    catch (err) {
        console.log(id)
        res.status(404).send({"error": "the requested movie id does not exist"})
    }
})

app.get("*", (req, res)=>{
    res.send("<h1>Catch all</h1>");
});

app.listen(3001, () => {
    console.log('starting server on port 3001')
})

