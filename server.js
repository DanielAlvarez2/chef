const express = require('express')
const app = express()
app.use(express.static('public'))


let PORT = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send(index.html)
})

app.listen(PORT,()=>{
    console.log(`Express Server Listening on Port ${PORT}!`);
})