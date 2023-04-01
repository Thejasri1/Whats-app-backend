const mongoose = require('mongoose')
const AccountsPage = require('./Routes/Accounts')
const AuthenticationPage = require('./Routes/Authentication')
const MessagesPage = require('./Routes/Messages')
const bodyParser = require("body-parser")
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const router = express()

//MongoDB database connection URL
const DB_URL = process.env.DB

//Middleware connections
router.use(express.json())
router.use(cors())

//Conneting with external files
router.use(bodyParser.json({limit:'10mb'}))
router.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
router.use('/',AccountsPage)
router.use('/auth',AuthenticationPage)
router.use('/messages',MessagesPage)


//Mongo DB connection function
mongoose.connect(DB_URL, {useNewUrlParser: true,useUnifiedTopology: true}).then(async (db, err) => {
    if(err) throw err
    else console.log("connected")
})

const PORT = process.env.NODE_ENV === "production" ? process.env.PRODUCTION_URL:process.env.PORT

//server connectionprocess.env.NODE_ENV 
router.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`)
})