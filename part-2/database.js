const pgp = require( 'pg-promise' )()
const db = pgp({ database: 'grocery_store' })

const items = () => db.query( 'SELECT * FROM item' )

const itemsBySection = section => db.query( 'SELECT id, name FROM item WHERE section = $1', section )

const totalItemsBySection = section => db.query( 'SELECT COUNT(*) FROM item WHERE section = $1', section ).then( result => result[0].count )

const orderTotal = purchase_id => db.query( 'SELECT SUM( price ) FROM item_purchse JOIN item ON item_id = item.id WHERE purchase_id = $1', purchase_id ).then( result => result[0].sum )

module.exports = { items, itemsBySection, totalItemsBySection, orderTotal }