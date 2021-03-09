const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World! some feature')
})

app.get('/other', (req, res) => {
  res.send('Hello World! some other')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
