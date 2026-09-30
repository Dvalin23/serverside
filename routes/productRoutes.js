const express = require('express')

const { uploadProduct, GettAllProduct,  } = require('../controller/productController')

const Routes = express.Router()

Routes.post("/upload-product", uploadProduct)
Routes.get("/get-all-product", GettAllProduct)