CREATE TABLE content (
    id serial PRIMARY KEY,
    name varchar (256) CHECK (name != '') NOT NULL,
    discription text,
    author_id int REFERENCES users(id),
    created_at timestamp DEFAULT current_timestamp
);

INSERT INTO content (name, discription, author_id ) VALUES
('FUNNY DOG', NULL, 1);


CREATE TABLE reactions (
    content_id int REFERENCES content(id),
    user_id int REFERENCES users(id),
    is_liked boolean
);

