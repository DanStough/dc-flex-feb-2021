# FaceGram: Part 2

We want to extend the face

1. A detailed view page for each account.
1. A list of all the accounts you follow. (Just avatar, name and link to detail profile)

You can use your own app to do this or start with this solution. The steps to complete are as follows if you use this template:

0. `npm install` to get all the dependencies.
1. Add the necessary express middleware for static files and body parsing
1. Figure out where to add `signup.html` so that the link in the index works
2. Move the `style` tags in the html templates to standalone css file(s).
3. Create a post method that adds a new profile to your dataset when the form is clicked
    1. The existing form will post to the route `/profile`
    2. You can use any method to generate the ID you want.
    3. Store the new profile in your `data` object so that it shows up on the homepage.

