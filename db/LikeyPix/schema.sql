create table users (
  id serial primary key,
  name varchar(50) not null,
  email varchar(50) not null
);

create table posts (
  id serial primary key,
  url text not null,
  user_id integer references users (id)
)

