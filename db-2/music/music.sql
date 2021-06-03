SELECT * 
  FROM track
;

SELECT * 
  FROM album
;

SELECT *
  FROM artist
;

SELECT *
	FROM track
;

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

SELECT album.title, artist.name
  FROM album JOIN artist
  ON album.artist_id = artist.id;
  
SELECT album.title, album.artist_id, artist.id, artist.name
  FROM album JOIN artist
  ON album.artist_id = artist.id;

SELECT album.title, album.artist_id, artist.id, artist.name
	FROM album INNER JOIN artist 
    ON album.artist_id = artist.id;

SELECT track.title, track.genre_id, genre.id, genre.name
	FROM track CROSS JOIN genre;
    
SELECT track.title, genre.name
	FROM track JOIN genre
    ON track.genre_id = genre.id;
    
SELECT track.title, artist.name, album.title, genre.name
	FROM track
    	JOIN genre ON track.genre_id = genre.id
        JOIN album ON track.album_id = album.id
        JOIN artist ON album.artist_id = artist.id;
        
DELETE FROM genre WHERE name = 'Metal';