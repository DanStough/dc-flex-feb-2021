# Sequelize ORM group project:
https://learn.digitalcrafts.com/flex/lessons/databases/sequelize-orm/#learning-objectives

// combined command
> npm i -D nodemon sequelize-cli

// goes inside of sequelize-cli sets the path for it
> npx sequelize-cli init

-----------------------------------------------------------------------

1. set up express and sequelize pg
> npm i express sequelize pg

1. setup dev dependency nodemon squelize-cli
> npm i -D nodemon sequelize-cli

1. initialize sequelize
npx auto look up `node_modules` dir and find `sequelize-cli`
> npx sequelize-cli init
  // creates config, migrations, models, seeders
- model: table

1. Check if my db pSQL is running
> brew services start postgresql
or 
> pg_ctl status

1. update username in ./config/config.json to heggy
> psql \du // list user
// and find the one role that has Superuser
// for mine, heggy

1. created db name photo_sharing_app (must run postgres db)
> npx sequelize-cli db:create
you can confirm by go into psql shell
> psql
> \l //list all table and confirm you see photo_sh_app_v2

1. create User model (schema), no space in attributes:
> npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

type: string, boolean, integer, date

2. Run migration to create table from Model
> npx sequelize-cli db:migrate

or revert drop the user table
> npx sequelize-cli db:migrate:undo // undo your migration of table, drop user table
> npx sequelize-cli db:migrate // run again to get back the table, recreate the user tabel

3. create seeding folder
> npx sequelize-cli seed:generate --name user

* check if you see Users table
psql
> \c photo_share_dev2  // connect to photo_share_dev2 db
> \dt // list my tables

4. update the seeder user.js with
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Annie',
      lastName: 'Easley',
      email: 'ajeasley@nasa.gov',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
```

5. seed (add/populating data into my db) db
> npx sequelize-cli db:seed:all

6. get all users /users
server.js
- require sequelize
- get user model
```js
const Sequelize = require("sequelize");  // get sequelize lib to talk to db
const { User, Photo } = require('./models');
```

7. Open postgresql shell and connects to the db
> psql <some database>

8. get all col from Users table (inside of psql shell)
> select * from "Users"; 

### Some commond errror:
* role user doesn't exist
  > psql //enter psql 
  > /du //list users
  - replace config.json developmen username: "<Role name>" with existing user name with

----
Photo sharing app
- has many users, that share photos with eachother

* John
- beach.jpg
- mountain.jpg

* Jane
- conference.jpg
- meet-with-rot-club.jpg