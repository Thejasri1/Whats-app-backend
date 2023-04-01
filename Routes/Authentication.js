const authConnetion = require('../Modals/Auth')
const express = require('express')
const router = express()

router.get("/", async (req, res) => {
    const authList = await authConnetion.find({})
    res.send(authList)
})

router.post('/addAuth', async (req, res) => {
    try {
        await authConnetion.create(req.body)
    }
    catch (e) {
        console.log(e)
    }
})

router.patch('/updateAuth/:id', async (req, res) => {
    try {
        await authConnetion.findByIdAndUpdate(req.params.id, req.body)
    }
    catch (e) {
        console.log(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await authConnetion.findByIdAndDelete(req.params.id)
    }
    catch (e) {
        console.log(e)
    }
})
module.exports = router;