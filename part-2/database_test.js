const chai = require('chai')
const expect = chai.expect
const { items, getItemsBySection, shopperOrders, allShoppers } = require('./database.js')

it('getItemsBySection("bread") should return "Bagles", "Baguette/French Bread", and "Croissants"',
  done => {
    getItemsBySection('bread').then(results => {
      const names = results.map(result => result.name)
      console.log('names', names)
      expect(names).to.include('Bagles')
      expect(names).to.include('Baguette/French Bread')
      expect(names).to.include('Croissants')
      done()
    })
    .catch(err => {
      console.error(err)
      done()
    })
  }
)

it('shopperOrders() should return the order id and the total cost of the order',
  done => {
    shopperOrders('1').then(results => {
      console.log('shopperOrders', results)
      expect(results[0].price).to.equal('$8.84')
      expect(results[1].price).to.equal('$10.81')
      done()
    })
    .catch(err => {
      console.error(err)
      done()
    })
  }
)

it('allShoppers() should return the names of all shoppers who have atleast 1 order',
  done => {
    allShoppers().then(results => {
      // const names = results.map(result => result.shopper)
      // const sum = results.map(result => result.sum)
      console.log('shopperOrders', results)
      expect(results[0].shopper).to.equal('Alex')
      expect(results[0].sum).to.equal('4')
      done()
    })
    .catch(err => {
      console.error(err)
      done()
    })
  }
)


