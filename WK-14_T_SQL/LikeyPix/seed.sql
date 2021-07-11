insert into users
    (name, email)
values
    ('Alice', 'alice@email.com'),
    ('Bob', 'bob@email.com'),
    ('Cho', 'cho@email.com'),
    ('Daryl', 'daryl@email.com'),
    ('Emmy', 'emmy@email.com')
;

-- Line 1 tells PostgreSQL what table we're adding new rows to.
-- Line 2 specifies the columns (and the order) we will provide values for.
-- Line 3 informs SQL that the values will be listed next.
-- Lines 4-8 are the values to insert (enclosed in parentheses, separated by commas).
-- Line 9 ends the SQL statement.


insert into posts
    (url, user_id)
values
    ('walking-the-cat.jpg', 2),
    ('day-at-the-beach.jpg', 3),
    ('new-puppy.jpg', 1),
    ('cat-in-a-box.jpg', 5),
    ('doggos.jpg', 5)
;