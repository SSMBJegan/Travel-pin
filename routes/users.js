const router = require('express').Router();
const User = require('../models/User');

// register for web 

router.post("/register", async (req, res) => {
    try {
        // generate new user password


        // create new user


        // save new user and send response
        
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
