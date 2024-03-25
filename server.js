const express = require('express')
const app = express()
require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded({extended:true})) //access form data (body.xxx)
app.use(express.static('public')) //serve static files from public folder


const PORT = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send(index.html)
})

app.listen(PORT,()=>{
    console.log(`Express Server Listening on Port ${PORT}!`);
})