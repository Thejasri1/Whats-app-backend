const messagesConnection =require('../Modals/Messages')
const express = require('express')
const router = express()

//connect with display messages
router.get("/",async(req,res)=>{
    const messagesList =  await messagesConnection.find({})
     res.send(messagesList)
 })
 

//posting the messages
router.post('/addMessage',async(req,res)=>{
    try{
        await messagesConnection.create(req.body)
    }
    catch(e){
        console.log(e)
    }
})
//posting the messages
router.delete('/removeMessage/:id',async(req,res)=>{
    try{
        await messagesConnection.findByIdAndDelete(req.params.id)
    }
    catch(e){
        console.log(e)
    }
})
module.exports = router;