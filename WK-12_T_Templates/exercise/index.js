// 1. initialize express and templates **Done**

const data = require("./dataArray");
console.log(data);

app.get("/heartbeats", (req, res) => {
  res.json({
    is: "working",
  });
});

// 4. Detail page here.

// 5. List page here

// 3. Write out a route to test your server is working

// 2. Start your express server **Done**
