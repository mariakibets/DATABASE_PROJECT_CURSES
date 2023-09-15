CREATE TABLE books (
    id serial PRIMARY KEY,
    author varchar (70) CHECK (author != ''),
    book_name varchar(70) CHECK (book_name != '' ) UNIQUE,
    year_relesed varchar(4),
    paint varchar (70),
    discription text,
    quantity int CHECK (quantity >= 0),
    PRIMARY KEY (author, book_name )
);

CREATE TABLE products (
    id serial PRIMARY KEY,
    brand varchar (200) NOT NULL,
    model varchar (300) NOT NULL,
    description text,
    price numeric (10, 2) NOT NULL CHECK (price > 0),
    dicount_price numeric (10, 2) CHECK (dicount_price < price)
);

INSERT INTO products (brand, model, price ) VALUES
('Tovar 1', 'Model 1', 200),
('Tovar 2', 'Model 2', 400),
('Tovar 3', 'Model 3', 600),
('Tovar 4', 'Model 4', 800);

ALTER TABLE products ADD CONSTRAINT "unique_brand_model_pair" UNIQUE (brand , model);

ALTER TABLE products ADD COLUMN quantity int;