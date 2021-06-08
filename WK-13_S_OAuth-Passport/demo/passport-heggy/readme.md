5/22/2021 Day 37 
cookie session user login

Session login with github
![login ebook prem path](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FheggyEbook.gif?v=1623118927368)

```json
{
	"cookie": {
		"originalMaxAge": 60000,
		"expires": "2021-06-08T02:07:58.489Z",
		"httpOnly": true,
		"path": "/"
	},
	"passport": {
		"user": {
			"id": "12738884",
			"displayName": "Castaneda",
			"username": "heggy231",
			"profileUrl": "https://github.com/heggy231",
			"photos": [
				{
					"value": "https://avatars.githubusercontent.com/u/12738884?v=4"
				}
			],
			.....
				"type": "User",
				"site_admin": false,
				"name": "Castaneda",
				"company": null,
				"blog": "",
				"location": "San Francisco, Bay Area",
				"email": null,
				"hireable": true,
				"bio": "Javascript Developer",
				"twitter_username": null,
				"public_repos": 410,
				"public_gists": 115,
				"followers": 81,
				"following": 189,
				"created_at": "2015-06-03T23:22:12Z",
				"updated_at": "2021-06-07T23:25:32Z"
			}
		}
	}
}
```

![display photo](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FpassportDisplayName.png?v=1623129589495)

- Drill down to req.session.passport.user.photos array to get to my photo.

```js
app.get('/ebooks', ensureAuthenticated, (req, res) => {
  res.send(`
    <h1>Hello, req.session.passport.user.displayName: ${req.session.passport.user.displayName}</h1>
    <h3>Hello, req.session.passport.user.photos: ${
      req.session.passport.user.photos.map(img => `
      <img src="${img.value}" width="200px">
      `).join("")
    }</h3>
    <h2>Heggy's Paid User Only Ebook Top 10 list:</h2>
  `);
});
```