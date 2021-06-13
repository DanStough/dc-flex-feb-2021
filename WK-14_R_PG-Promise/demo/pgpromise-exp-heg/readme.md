# Goal - make imdb api

What is good api?
- imdb api should have a detail about a single movie
- it should have a list of movies

Design thinking what should home?
- /home is dashboard
- / is list

/home

app.get("/home", async (res, req) => {
  const movie = await db.any("SELECT * FROM title_basics LIMIT 100"); // list of 100 movies - this could a home page

  // Render html page
  res.send(`<h1>Heggy Movie database Home page</h1>
    ${moviesHTML}
  `);
});