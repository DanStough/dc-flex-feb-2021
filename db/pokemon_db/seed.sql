INSERT INTO pokemon
  (name, type, evolvesFromId)
VALUES
  ('Bulbasaur', 'Grass', null),
  ('Ivysaur', 'Grass', 1),
  ('Venusaur', 'Grass', 2),
  ('Charmander', 'Fire', null),
  ('Charmeleon', 'Fire', 4),
  ('Charizard', 'Fire', 5),
  ('Squirtle', 'Water', null),
  ('Wartortle', 'Water', 7),
  ('Blastoise', 'Water', 8),
  ('Caterpie', 'Bug', null),
  ('Metapod', 'Bug', 10),
  ('Butterfree', 'Bug', 11)
;

INSERT INTO trainers
  (name, isGymLeader, pokemonSlot1, pokemonSlot2, pokemonSlot3, pokemonSlot4, pokemonSlot5, pokemonSlot6)
VALUES
  ('Ash', 'FALSE', 1, 10, null, null, null, null),
  ('Misty', 'TRUE', 7, null, null, null, null, null),
  ('Brock', 'TRUE', 3, 6, 9, null, null, null),
  ('Axle', 'TRUE', 2, 4, 8, null, null, null),
  ('Moxie', 'FALSE', 1, null, 9, 9, 9, 9)
;