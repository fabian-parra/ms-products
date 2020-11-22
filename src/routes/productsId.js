const {Router} = require('express')
const {getDb} = require('../client/DB')

const productsIdRoute = Router()

productsIdRoute.get('/products/:id', (req, res) => {
  getDb().then(db => db.collection('products').findOne({id: parseInt(req.params.id)}).then(product => {
    res.status(200).send(JSON.stringify(product))
  }).catch((e) => {
    console.warn(e)
    res.status(500).send('')
  }))
})

module.exports = {productsIdRoute}
