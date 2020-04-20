
// const path = require('path');
const express= require('express');
const router = express.Router();

const customerController= require('../controller/customer') ;

router.get('/', customerController.getSignUpPage);

router.post('/verify', customerController.renderVerifyPage);

module.exports=router;

//router.get('/add-product', adminController.getAddProduct);


//router.get('/products', adminController.getProducts);
