
const accountConnection = require('../Modals/Account')
const express = require('express')
const router = express()

//Get call for Displaying all the contacts
router.get('/', async (req, res) => {
    const data = await accountConnection.find({})
    res.send(data)
})


//posting the account details
router.post('/account', async (req, res) => {
    try {
        await accountConnection.create(req.body)
    }
    catch (e) {
        console.log(e)
    }
})
module.exports = router;
