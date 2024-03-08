const express = require('express')
const app = express()

let PORT = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send(`Express Server Listening on Port ${PORT} `)
})

app.listen(PORT,()=>{
    console.log(`Express Server Listening on Port ${PORT}`);
})