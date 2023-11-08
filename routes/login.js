var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mainpage/login');
});

router.get('/signup',(req,res)=>{
  res.render('mainpage/signup')
})

module.exports = router;
