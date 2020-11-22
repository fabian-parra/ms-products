const {Router} = require('express')
const {getDb} = require('../client/DB')

const productsMatchRoute = Router()

productsMatchRoute.get('/products', (req, res) => {
  const {match} = req.query
  getDb().then(db => db.collection('products').find({ $or: [ { brand: new RegExp(match, 'i') }, { description: new RegExp(match, 'i') } ] }).toArray().then(products => {
    res.status(200).send(JSON.stringify(products))
  }).catch(e => {
    console.warn(e)
    res.status(500).send('')
  }))
})

module.exports = {productsMatchRoute}
