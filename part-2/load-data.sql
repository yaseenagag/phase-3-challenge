/*sql statements to insert data into the orders and shoppers table*/
COPY item (name, price, section) FROM :csvPath DELIMITERS ',' CSV HEADER;

INSERT INTO purchase (shopper) 
VALUES 
('Yaseen'), 
('Maira'), 
('Khalil'), 
('Alex'), 
('Izzy'), 
('Brian'), 
('Joe'), 
('Nadir');

INSERT INTO item_purchase (item_id, purchase_id)
VALUES 
(1, 1),
(2, 1),
(7, 2),
(4, 2),
(6, 3),
(3, 3),
(9, 4),
(2, 5),
(2, 6),
(9, 7),
(4, 8),
(3, 8);