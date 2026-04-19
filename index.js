require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h2>Please login to our page sruj_clickz')
})
app.get('/youtube',(req,res)=>{
    res.send('<h3>Sruj-clickz<h3>');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
