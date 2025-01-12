const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hallo, wenn du das liest, ist alles gut gelaufen und die App konnte auf www.codylon.de übertragen werden.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})