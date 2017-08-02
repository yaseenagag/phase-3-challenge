/*sql statements to insert data into the orders and shoppers table*/
COPY item (name, price, section) FROM :csvPath DELIMITERS ',' CSV HEADER;

INSERT INTO purchase (shopper) VALUES ('Yaseen'), ('Maira'), ('Khalil'), ('Alex'), ('Rachel');

INSERT INTO item_purchase (item_id, purchase_id)
VALUES 