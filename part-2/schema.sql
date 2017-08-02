DROP TABLE IF EXISTS item;
CREATE TABLE item (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price money,
  section VARCHAR(50)
);

DROP TABLE IF EXISTS purchase;
CREATE TABLE purchase (
  id SERIAL PRIMARY KEY,
  shopper VARCHAR(50)
);

DROP TABLE IF EXISTS item_purchase;
CREATE TABLE item_purchase (
  item_id INTEGER REFERENCES item,
  purchase_id INTEGER REFERENCES purchase
);


