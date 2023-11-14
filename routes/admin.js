var express = require('express');
var router = express.Router();
require('./login')
const Product = require('../helpers/signup-helpers');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin/admin',{admin:true});
});

router.get('/add-product',function(req,res){
    res.render('admin/add-product',{admin:true})
})

router.post('/add-product', async (req, res) => {
    try {
      const { name, category, price, image } = req.body;
  
      // Create a new product instance
      const newProduct = new Product({
        name,
        category,
        price,
        image,
      });
  
      // Save the new product to the database
      await newProduct.save();
  
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
