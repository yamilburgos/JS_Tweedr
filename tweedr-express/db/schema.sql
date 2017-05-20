DROP DATABASE IF EXISTS tweedr_app;
CREATE DATABASE tweedr_app;

\c tweedr_app;

CREATE TABLE IF NOT EXISTS posts(
	id SERIAL PRIMARY KEY,
	posts TEXT
);

INSERT INTO posts(posts) VALUES ('Hello World');