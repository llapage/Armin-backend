const router = require("express").Router()

router.post("/payment" , async (req , res) => {
    try{
        const stripe = require('stripe')(process.env.STRIPE_KEY);
        const charge = await stripe.charges.create({
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:"usd"
        });
        res.status(200).json(charge)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;