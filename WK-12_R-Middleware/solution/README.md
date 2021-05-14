# FaceGram: Part 2

We want to extend the FaceGram app to have a user signup page. This will require express middleware and adding a POST route like we discussed in class today.

You can use your own version of this app to do this or start with this solution. The steps to complete are as follows if you start with this template:

0. `npm install` to get all the dependencies.
1. Add the necessary express middleware for static files and body parsing
1. Figure out where to move `./signup.html` so that the link in the index works
2. Export the `style` tags in the html templates to standalone css file(s).
3. Create a post method that adds a new profile to your dataset when the form is clicked
    1. The existing form will post to the route `/profile`
    2. You can use any method to generate the ID you want.
    3. Store the new profile in your `data` object so that it shows up on the homepage.

