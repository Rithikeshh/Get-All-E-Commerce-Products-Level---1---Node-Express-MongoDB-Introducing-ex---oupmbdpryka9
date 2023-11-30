const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products
app.get("/api/v1/:product", (req, res) => {
    const {product} = req.params
    if(product == 'products'){
        res.status(200).json({"status": "success", message: "Products fetched successfully", data: {"product":{...products}}});
        
    }else{
        res.status(404).json({"message": "Product not found"})
    }
})

module.exports = app;
