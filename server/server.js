const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

app.get('/api', (req, res) => {
  res.send('api is running!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})