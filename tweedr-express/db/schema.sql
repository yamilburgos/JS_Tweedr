DROP DATABASE IF EXISTS tweeder_app;
CREATE DATABASE tweeder_app;

\c tweeder_app

CREATE TABLE tweeder_posts (
	ID SERIAL PRIMARY KEY,
	posts VARCHAR,
	
);

INSERT INTO tweeder_posts (posts)
	VALUES 
	('Hello World')