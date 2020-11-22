const {MongoClient} = require('mongodb')

const HOST = process.env.DB_HOST || '127.0.0.1'
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const URL = `mongodb://USER:PASSWORD@${HOST}:27017?poolSize=5`
const DATA_BASE = 'desafio_walmart'

let dataBase = null
let client = null
const getDb = () => new Promise((resolve, reject) => {
  if(!!dataBase) return resolve(dataBase)
  client = new MongoClient(URL)
  return client.connect().then((mongoClient) => {
    dataBase = mongoClient.db(DATA_BASE)
    return resolve(dataBase)
  }).catch(reject)
})

const closeDb = () => {
  if(!!client) return client.close()
  return Promise.resolve()
}

module.exports = {getDb, closeDb}
