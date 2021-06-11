const pgp = require(`pg-promise`)(); // created pgp instance ready to make db connection

// configuration obj https://github.com/vitaly-t/pg-promise/wiki/connection-syntax
const cn = {
    host: 'localhost', // where heroku will host
    port: 5432,
    database: 'imdb' // name of database
}

// create db using pgp func, pass conf obj as param
const db = pgp(cn)

// async function
let getData = async () => {
    // eventually we will use route param from express
    // const tconst = "tt0000038";

    // const movie = await db.one("SELECT * FROM title_basics WHERE tconst=$1", ['tt0000038']);
    const movie = await db.any("SELECT * FROM title_basics LIMIT 100");
    console.log('list of top 100 movie: ====>', movie);
    /**
     * movie result => when using db.any()
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
- This is JS obj, movie.start_year, movie.primary_title
- I could return as response res.send()
*/
} 

getData();

