const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('get:::',req.query)
  res.json({'status':'ok'})
})
app.post('/', (req, res) => {
  console.log('post:::',req.body)
  res.json({'status':'ok'})
})

app.listen(PORT, () => {
  console.log("server running")
})

