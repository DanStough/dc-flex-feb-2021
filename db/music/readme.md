```sql
INSERT INTO artist (name) VALUES ('Led Zeppelin');
INSERT INTO artist (name) VALUES ('AC/DC');
SELECT * FROM artist;

INSERT INTO album (title, artist_id) VALUES ('Who Made Who', 2);
INSERT INTO album (title, artist_id) VALUES ('IV', 1);
SELECT * FROM album;

INSERT INTO genre (name) VALUES ('Rock');
INSERT INTO genre (name) VALUES ('Metal');
SELECT * FROM genre;

INSERT INTO track (title, rating, len, count, album_id, genre_id)
	VALUES ('Black Dog', 5, 297, 0, 2, 1);
INSERT INTO track (title, rating, len, count, album_id, genre_id)
	VALUES ('Stairway', 5, 482, 0, 2, 1);
INSERT INTO track (title, rating, len, count, album_id, genre_id)
	VALUES ('About to Rock', 5, 313, 0, 1, 2);
INSERT INTO track (title, rating, len, count, album_id, genre_id)
	VALUES ('Who Made Who', 5, 207, 0, 1, 2);   
SELECT * FROM track;

```