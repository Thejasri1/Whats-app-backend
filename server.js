const mongoose = require('mongoose')
const accountConnection =require('./Modals/Account')
const messagesConnection =require('./Modals/Messages')
const cors = require('cors')
const express = require('express')
const app = express()

//MongoDB database connection URL
const DB_URL = "mongodb+srv://madishettivenu28:pJCtlQtcmw3NDKxU@cluster0.s4xjpkr.mongodb.net/Account"

//Middleware connections
app.use(express.json())
app.use(cors())

//Get call for Displaying all the contacts
app.get('/',async(req,res)=>{
 const data = await accountConnection.find({})
 res.send(data)
})

//connect with display messages
app.get("/user",async(req,res)=>{
   const messagesList =  await messagesConnection.find({})
    res.send(messagesList)
})


//posting the account details
app.post('/accout',async(req,res)=>{
    try{
        await accountConnection.create(req.body)
    }
    catch(e){
        console.log(e)
    }
})

//posting the messages
app.post('/messages',async(req,res)=>{
    try{
        await messagesConnection.create(req.body)
    }
    catch(e){
        console.log(e)
    }
})

//Mongo DB connection function
mongoose.connect(DB_URL, {useNewUrlParser: true,useUnifiedTopology: true}).then(async (db, err) => {
    if(err) throw err
    else console.log("connected")
})

//server connection
app.listen(8080,(req,res)=>{
    console.log(`http://localhost:8080`)
})