const pgp = require(`pg-promise`)();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'imdb'
}

const db = pgp(cn)

getData = async () => {
    const tconst = "tt0000038"
    const movie = await db.any("SELECT * FROM title_basics WHERE tconst=$1", [tconst]);
    console.log(movie)
} 

getData()

