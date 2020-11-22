const express = require('express')
const {productsIdRoute} = require('./routes/productsId')
const {productsMatchRoute} = require('./routes/productsMatch')
const {closeDb} = require('./client/DB')

const app = express()

app.use(productsIdRoute)
app.use(productsMatchRoute)
app.listen(process.env.PORT || 8080, () => console.log("Server Up"))

const shutDown = () => {
  console.log('Close db connection...')
  closeDb().then(() => process.exit(0))
  setTimeout(() => {
    console.warn('Force stop before 5 seconds...')
    process.exit(1)
  },5000)
} 

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
