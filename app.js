const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=>{
console.log(req)
res.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/cat', (req, res, next) => {
  res.sendFile(`${__dirname}/views/home-page.html`)
})

app.listen(3000, ()=> console.log('server running'))