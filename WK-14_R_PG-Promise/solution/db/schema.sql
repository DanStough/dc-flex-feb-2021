CREATE TABLE IF NOT EXISTS profiles(
   id SERIAL PRIMARY KEY,
   name varchar NOT NULL,
   email varchar NULL,
   avatar varchar NULL
);

CREATE TABLE IF NOT EXISTS images(
   id SERIAL PRIMARY KEY,
   profile_id integer references profiles (id) NOT NULL,
   url varchar NOT NULL
);
