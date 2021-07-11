# Exercise

1) Create a new database named **pokemon_db**

2) Create a **pokemon** table with the following columns:

- id (integer)
- name (varchar)
- type (varchar)
- evolvesFromId (integer)

3) Add the following records to the **pokemon** table:

- 1, Bulbasaur, Grass, null
- 2, Ivysaur, Grass, 1
- 3, Venusaur, Grass, 2
- 4, Charmander, Fire, null
- 5, Charmeleon, Fire, 4
- 6, Charizard, Fire, 5
- 7, Squirtle, Water, null
- 8, Wartortle, Water, 7
- 9, Blastoise, Water, 8
- 10, Caterpie, Bug, null
- 11, Metapod, Bug, 10
- 12, Butterfree, Bug, 11

4) Create a **trainers** table with the following columns:

- id (integer)
- name (varchar)
- isGymLeader (boolean)
- pokemonSlot1 (int)
- pokemonSlot2 (int)
- pokemonSlot3 (int)
- pokemonSlot4 (int)
- pokemonSlot5 (int)
- pokemonSlot6 (int)

5) Add the following records to the **trainers** table:

- 1, Ash, FALSE, 1, 10, null, null, null, null
- 2, Misty, TRUE, 7, null, null, null, null, null,
- 3, Brock, TRUE, 3, 6, 9, null, null, null
- 4, Axle, TRUE, 2, 4, 8, null, null, null
- 5, Moxie, FALSE, 1, null, 9, 9, 9, 9

6) Dump this database to a file with the following command:

- **pg_dump pokemon_db > pokemon.sql**

# Solution

The following can be entered from PSQL terminal (SQL Terminal on Windows)

```sql
CREATE DATABASE pokemon_db;

CREATE TABLE pokemon(
   id SERIAL PRIMARY KEY,
   name varchar NOT NULL,
   type varchar NOT NULL,
   evolvesFromId integer NULL
);

INSERT INTO pokemon
    (id, name, type, evolvesFromId)
values
    (1, 'Bulbasaur', 'Grass', null),
    (2, 'Ivysaur', 'Grass', 1),
    (3, 'Venusaur', 'Grass', 2),
    (4, 'Charmander', 'Fire', null),
    (5, 'Charmeleon', 'Fire', 4),
    (6, 'Charizard', 'Fire', 5),
    (7, 'Squirtle', 'Water', null),
    (8, 'Wartortle', 'Water', 7),
    (9, 'Blastoise', 'Water', 8),
    (10, 'Caterpie', 'Bug', null),
    (11, 'Metapod', 'Bug', 10),
    (12, 'Butterfree', 'Bug', 11);

CREATE TABLE trainers(
   id SERIAL PRIMARY KEY,
   name varchar NOT NULL,
   isGymLeader boolean NOT NULL,
   pokemonSlot1 integer NULL,
   pokemonSlot2 integer NULL,
   pokemonSlot3 integer NULL,
   pokemonSlot4 integer NULL,
   pokemonSlot5 integer NULL,
   pokemonSlot6 integer NULL
);

--
-- In this example, the ID is auto-assigned by postgres
--
INSERT INTO trainers
    (name, isGymLeader, pokemonSlot1, pokemonSlot2, pokemonSlot3, pokemonSlot4, pokemonSlot5, pokemonSlot6)
values
    ('Ash', FALSE, 1, 10, NULL, NULL, NULL, NULL),
    ('Misty', TRUE, 7, NULL, NULL, NULL, NULL, NULL),
    ('Brock', TRUE, 3, 6, 9, NULL, NULL, NULL),
    ('Axle', TRUE, 2, 4, 8, NULL, NULL, NULL),
    ('Moxie', FALSE, 1, NULL, 9, 9, 9, 9);
```

See attached SQL file for the result of the dump.
