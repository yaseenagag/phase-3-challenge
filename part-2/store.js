const { items, getItemsBySection, shopperOrders, allShoppers } = require('./database')

const commandLine = () => {
  const searchByCategory = process.argv[2]
  const input = process.argv[3]

  if(searchByCategory === 'product-list') {
    getItemsBySection(input)
      .then(results => { 
        createProductsTable(results)
        process.exit(0)
    })
  } else if(searchByCategory === 'shopper-orders') {
    shopperOrders(input)
      .then(results => { 
        createOrdersTable(results)
        process.exit(0)
    })
  } else if(searchByCategory === 'real-shoppers') {
    allShoppers()
      .then(results => {
        createShoppersTable(results)
        process.exit(0)
      })
    }
}

commandLine()


const createOrdersTable = (results) => { 
    console.log('|----------+-------------|\n| Order id | total cost  |\n|----------+-------------|')
      for (values of results) {
      console.log("|", values.item_id, "       |", values.price, "     |");
      }
    console.log('|----------+-------------|')
}

const createProductsTable = (results) => { 
    console.log('|--------------+---------|\n| Product Name | Section |\n|--------------+---------|')
      for (values of results) {
      console.log("|", values.name, "       |", values.section, "   |");
      }
    console.log('|--------------+---------|')
}

const createShoppersTable = (results) => { 
    console.log('|--------------+------------------|\n| Shopper Name | number of orders |\n|--------------+------------------|')
      for (values of results) {
      console.log("|", values.shopper, "       |", values.sum, "              |");
      }
    console.log('|--------------+------------------|')
}
