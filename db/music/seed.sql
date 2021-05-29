INSERT INTO artist
  (name)
VALUES
  ('Max'),
  ('Pink'),
  ('BTS')
;

INSERT INTO album
  (title, artist_id)
VALUES
  ('Blue heart', 2),
  ('Fax it', 1),
  ('Dynamite', 3)
;

INSERT INTO genre
  (name)
VALUES
  ('Rock'),
  ('Metal')
;

INSERT INTO track
  (title, rating, len, count, album_id, genre_id)
VALUES
  ('Black Dog', 5, 297, 0, 2, 1),
  ('Stairway', 5, 482, 0, 2, 1),
  ('About to Rock', 5, 313, 0, 1, 2),
  ('Who Made Who', 5, 207, 0, 1, 2)
;