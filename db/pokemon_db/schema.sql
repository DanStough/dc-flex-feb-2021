CREATE TABLE pokemon (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) UNIQUE,
  type VARCHAR(128),
  evolvesFromId INTEGER
);

CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  isgymleader BOOLEAN,
  pokemonslot1 INTEGER,
  pokemonslot2 INTEGER,
  pokemonslot3 INTEGER,
  pokemonslot4 INTEGER,
  pokemonslot5 INTEGER,
  pokemonslot6 INTEGER
);