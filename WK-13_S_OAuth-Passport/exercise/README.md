# FaceGram: Part 3 - Authentication Anarchy

FaceGram is blowing up. But right now access is ANONYMOUS - no one needs to login to create an account or view content. This is bad for business. Your job is to require a login for the site. Use the following steps to work through this new feature request.

The previous solution is included here for you to use as a starting point. You should be able to run this project as-is to start.

1. Add a "login" page/route that simply has a FaceGram heading and a button to login with Github.
    1. What kind of HTTP method do you think this should be?
    1. What URL should this button hit? Can you test this with a `console.log`?
2. Generate the secrets needed to talk with Github OAuth2 API
    1. Create an [OAUTH2 Application in Github](https://github.com/settings/developers).
    2. Add dotenv module to your project with the credentials
2. Add and configure the Passport JS Middleware.
    4. Use the class notes and the passport github strategy notes to implement the passport middleware
        1. `passport.use`
        2. `passport.initialize` and `passport.session`
        2. login route
        3. callback route
        4. logout route
3. If you're not logged in, redirect to the login page.
4. Add a logout button/anchor tag in the other template views.

# Bonus Points!
1. Automatically add a user to the dataset after they log in to your service.
2. Create a "Profile Update" page so that users can edit content (Hint: use PUT request)
3. Add a "delete profile" button that will let users delete unused profiles (Hint: use DELETE request) 
4. Use the built-in express router to move all of the authentication routes into a new file.

_
http://localhost:3000/auth/github/callback

```js
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