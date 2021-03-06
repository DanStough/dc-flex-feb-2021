# FaceGram: Part 4 - Database Devastation

Going back in time before we added authentication, we were using fake data to run our server. Now is the time to use a real database. Your job is to take the code provided and instead of using fake data, use `pg-promise` to manipulate a real database. Requirements:

1. The `/profile` page displays all users in the db
1. The `/profile/:id` route displays an individual user from the db
1. The signup page creates a new profile.

Don't forget to handle input errors in your express routes, like  what happens if a user doesn't exist but is requested by the APIi?

Hints for where to start:
1. Add NPM script commands to create/delete the database per the [Learning Portal DataModeling Page](https://learn.digitalcrafts.com/flex/lessons/databases/data-modeling/)
1. Install `pg-promise`
1. Test the database connection in you server.js
1. Try writing a query to handle `/profile`
1. Try writing a query to handle `/profile/:"id`
1. Try writing a query to insert a record for POST `/profile`

## Bonus Points!
1. Add a "Delete" button to each profile on the `/profile` view and on the edit profile page. 
    1. Add a new route to handle this delete.
    1. Add code in the frontend to handle the delete request (review how the signup page works for more details).
    1. Create a SQL statement to delete the record from the database.
    1. Refresh the view.

# RUNNING THE SOLUTION

1. `npm install`
1. Create an `.env` file according to the template provided using your postgres connection details.
1. Run the following to setup your database:
    1. `npm run db:create`
    1. `npm run db:init`
    1. `npm run db:seed`
1. Run the app with `npm run dev`
