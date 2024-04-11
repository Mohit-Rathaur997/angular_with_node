const http = require('http');
const port = process.env.port || 3000;
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const login = require('./router/login')
const db = require('./config/config')

app.use(bodyParser.urlencoded({extended:false})) // allow  parsing data with query params
app.use(bodyParser.json({limit:'50mb'})) 
app.use(express.json()) // parse only json data


//manage cors error
app.use(cors({
    origin : '*',
    method : ["GET","POST","PUT", "FETCH","PATCH","DELETE"],
    allowHeaders : ["Content-Type","authorization"]
}))

//static folder configuration(for build purpose)
app.use(express.static(path.join(__dirname,'../client/dist'))) // very important for build
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/dist/index.html'))
})
app.get('*',(req,res)=>{ 
    res.sendFile(path.join(__dirname,'../client/dist/index.html'))
})
// build section finished
app.use('/api',login)


// start node from server
const server =async ()=>{
    const mongoose = await db.connect_db()
    app.listen(port,(req,res)=>{
        console.log("server started at port",port);
    })
} 

server();