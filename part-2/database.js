const pgp = require( 'pg-promise' )()
const db = pgp({ database: 'grocery_store' })

const items = () => db.query( 'SELECT * FROM item' )

const getItemsBySection = item => db.query( 'SELECT id, name, section FROM item WHERE section = $1', [item] )


const shopperOrders = order => db.query( 'SELECT item_id, price FROM item_purchase JOIN item ON item_id = item.id WHERE purchase_id = $1', order )

const allShoppers = () => db.query('SELECT purchase.shopper, SUM(item_purchase.purchase_id) FROM purchase JOIN item_purchase ON item_purchase.purchase_id = purchase.id GROUP BY shopper')

module.exports = { items, getItemsBySection, allShoppers, shopperOrders }

  