To associate Users and Photos, we add a userId field to our Photo model. This will serve as our foreign key. To let Sequelize know that, we'll modify models/photos.js before we run the migration.

> npx sequelize-cli model:generate --name Photo --attributes title:string,url:string,userId:integer

npx sequelize-cli model:generate --name Photo --attributes title:string,url:string,userId:integer

'https://solarsystem.nasa.gov/system/resources/detail_files/17761_cassinihuygens_BTN_16_purple_final_01.jpg',
       userId: 1,

- https://sequelize.org/master/manual/model-querying-basics.html