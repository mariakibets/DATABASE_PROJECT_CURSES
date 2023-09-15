CREATE TABLE orders_to_products (
    orsder_id int REFERENCES orders(id),
    product_id int REFERENCES products (id),
    quantity int,
    PRIMARY KEY (orsder_id, product_id)
);


INSERT INTO  orders (customer_id) VALUES (1);

INSERT INTO orders_to_products (orsder_id, product_id, quantity) VALUES 
(1, 4, 2),
(1, 2, 1),
(1, 1, 1);