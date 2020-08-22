CREATE DATABASE userapi;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO users (name, email, password) VALUES ('Felix Kiamba', 'kiambafelix@yahoo.com', 'admin123');