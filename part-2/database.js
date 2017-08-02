const pgp = require( 'pg-promise' )()
const db = pgp({ database: 'grocery_store' })

const items = () => db.query( 'SELECT * FROM item' )

const getItemsBySection = item => db.query( 'SELECT id, name, section FROM item WHERE section = $1', [item] )


const shopperOrders = order => db.query( 'SELECT item_id, price FROM item_purchase JOIN item ON item_id = item.id WHERE purchase_id = $1', order )

const allShoppers = section => db.query( 'SELECT COUNT(*) FROM item WHERE section = $1', section ).then( result => result[0].count )

module.exports = { items, getItemsBySection, allShoppers, shopperOrders }