import { useAuth0 } from '@auth0/auth0-react';
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OgpQiSHuB20Suxh1BpewSILJowOhgzpsd8fPi53ELh7EgQC7Yr4hQ1fmSJxEH5uZVnS39NTreBrPec2DsLO1Cj800PZRtuaj7");
const { user}=useAuth0();
app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        customer_email: user.name,
        billing_address_collection: 'required',
        shipping_address_collection: {
            allowed_countries: ['US', 'CA'],
          },
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})
 
})


app.listen(7000,()=>{
    console.log("server start")
})
