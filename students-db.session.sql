CREATE TABLE test();

DROP TABLE test;
DROP TABLE test2;

CREATE TABLE users (
    first_name varchar(64) NOT NULL CONSTRAINT first_name_not_empty CHECK (first_name != ''),
    last_name varchar(64) NOT NULL  CONSTRAINT last_name_not_emrty (last_name != ''),
    email text NOT NULL CHECK (email != '') UNIQUE,
    biography text,
    gender varchar(30) NOT NULL,
    is_subscribe boolean NOT NULL,
    birthday date CHECK ( birthday <= current_date),
    foot_size smallint,
    height numeric(4 , 2)
);

INSERT INTO users VALUES 
               ('Maria', 'Kibets', 'biograpy.....', 'female', true, '2006-02-03', 38, 1.65)
