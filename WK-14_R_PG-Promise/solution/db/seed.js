
// Writing a script to load data from existing JS file instead of SQL script.
require('dotenv').config();
const pgp = require(`pg-promise`)();

const cn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
}

const db = pgp(cn)

data = [
    {
      name: 'Ricky Berge',
      email: 'Lexie.Parisian@yahoo.com',
      avatar: 'https://cdn.fakercloud.com/avatars/edgarchris99_128.jpg',
      images: [
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food'
      ]
    },
    {
      name: 'Jorge Abbott',
      email: 'Faye.Botsford96@yahoo.com',
      avatar: 'https://cdn.fakercloud.com/avatars/joshaustin_128.jpg',
      images: [
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food'
      ]
    },
    {
      name: 'Minnie Hessel',
      email: 'Ron40@gmail.com',
      avatar: 'https://cdn.fakercloud.com/avatars/jervo_128.jpg',
      images: [ 'http://placeimg.com/640/480/food' ]
    },
    {
      name: 'Rex Upton DVM',
      email: 'Wilson.Moen12@yahoo.com',
      avatar: 'https://cdn.fakercloud.com/avatars/chris_witko_128.jpg',
      images: [
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food'
      ]
    },
    {
      name: 'Traci Koch',
      email: 'Kaelyn.Spencer4@yahoo.com',
      avatar: 'https://cdn.fakercloud.com/avatars/stephcoue_128.jpg',
      images: [
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food',
        'http://placeimg.com/640/480/food'
      ]
    }
  ]

  // Load Data
  data.forEach( async profile => {

    // Create the profile
      let res = await db.one(`
        INSERT INTO profiles (name, email, avatar) 
        VALUES($1, $2, $3) RETURNING id;`, 
        [profile.name, profile.email, profile.avatar]);

      profile.id = res.id;
      console.log(`Inserted ${profile.name} with id ${profile.id }`);

      // For each profile, create the images
      profile.images.forEach( async image => {
        let res = await db.one(`
            INSERT INTO images (profile_id, url) 
            VALUES($1, $2) RETURNING id;`, 
            [profile.id, image])

        console.log(`Inserted image ${res.id} for ${profile.name}`);  
      });
  });
