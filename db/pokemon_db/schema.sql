CREATE TABLE pokemon (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) UNIQUE,
  type VARCHAR(128),
  evolvesFromId INTEGER
);

CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  isGymLeader BOOLEAN,
  pokemonSlot1 INTEGER,
  pokemonSlot2 INTEGER,
  pokemonSlot3 INTEGER,
  pokemonSlot4 INTEGER,
  pokemonSlot5 INTEGER,
  pokemonSlot6 INTEGER
);