var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin/admin',{admin:true});
});

router.get('/add-product',function(req,res){
    res.render('admin/add-product',{admin:true});
})

router.post('/add-product',(req,res)=>{
    console.log(req.body);
})

module.exports = router;
