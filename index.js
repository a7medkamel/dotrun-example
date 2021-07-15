const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const { headers, url, baseUrl, subdomains, hostname, originalUrl, query, path, protocol } = req;

  res.send({
    headers, url, baseUrl, subdomains, hostname, originalUrl, query, path, protocol
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})