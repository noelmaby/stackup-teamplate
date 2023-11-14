var express = require('express');
var router = express.Router();
const User = require('../helpers/signup-helpers');
const bcrypt = require('bcrypt');

/* login page */
router.get('/', function(req, res, next) {

  res.render('mainpage/login',{signupage:true});
});

router.get('/signup',(req,res)=>{
  res.render('mainpage/signup',{signupage:true})
})

/* sign up page check */
router.post('/signup',async (req, res) => {
  try {
    const newItem = new User({
      name: req.body.Name,
      email: req.body.Email,
    });

    newItem.password = await bcrypt.hash(req.body.Password,10);

    const savedItem = await newItem.save();
    console.log(savedItem)
    res.redirect('/')
  } catch (error) {
    console.log(error);
  }
});

/*login page check */
router.post('/login',async(req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });



    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid){
        console.log('user and password correct')
        res.redirect('/user')
       
      }

    else if (!isPasswordValid) {
      console.log('invalid password')
      res.redirect('/')
    }
    }

    if(!user){
      console.log('user not found')
      res.redirect('/')
    }

  } catch (error) {
    console.error(error);
    console.log(error)
  }
});

/*user page */
router.get('/user', function(req, res, next){

  res.render('user/user',{signupage:true});
});




module.exports = router;
