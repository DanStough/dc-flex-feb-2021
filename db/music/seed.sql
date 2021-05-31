INSERT INTO artist
  (name)
VALUES
  ('Max'),
  ('Pink'),
  ('BTS'),
  ('Led Zeppelin'),
  ('AC/DC')
;

INSERT INTO album
  (title, artist_id)
VALUES
  ('Blue heart', 2),
  ('Fax it', 1),
  ('BE', 3),
  ('Who Made Who', 5),
  ('IV', 4)
;

INSERT INTO genre
  (name)
VALUES
  ('Rock'),
  ('Metal'),
  ('Kpop')
;

INSERT INTO track
  (title, rating, len, count, album_id, genre_id)
VALUES
  ('Black Dog', 5, 297, 0, 2, 1),
  ('Stairway', 5, 482, 0, 2, 1),
  ('About to Rock', 5, 313, 0, 1, 2),
  ('Who Made Who', 5, 207, 0, 1, 2),
  ('Dynamite', 5, 208, 0, 3, 3),
  ('Life Goes On', 5, 301, 0, 3, 3)
;

INSERT INTO posts 
  (title)
VALUES
  ('Life Goes On');
;