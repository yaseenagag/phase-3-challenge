DROP TABLE IF EXISTS item;
CREATE TABLE item (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price money,
  section VARCHAR(255)
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  shopper VARCHAR(255)
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  shopper_id INTEGER REFERENCES shoppers,
  item_id INTEGER REFERENCES item
);


