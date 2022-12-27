const express = require('express')
const router = express.Router();
const users = require('../models/users')
const quiz = require('../models/quiz')
const answers = require('../models/answers')

router.get('/',(req, res, next)=>{
  
    res.render("home")
})
router.get('/login',(req, res, next)=>{
  
    res.render("login")
})

router.get('/signup',(req, res, next)=>{
  
    res.render("signup")
})


router.get('/quiz',(req, res, next)=>{
    quiz.find((err, docs)=>{
        req.render("quiz",{quiz:docs})
    })
})

router.get('/tutorials',(req, res, next)=>{
  
    res.render("tutorials")
})

router.post('/signup', (req, res, next)=>{

    const {uname, pswd} = req.body;
    // console.log(uname, pswd)

    const newUser = new users({
        username:uname, password: pswd
    })

    newUser.save((err)=>
    {
        if(err) throw err
        console.log("Saved successfully!")
        res.render("login")
    })
    
})

router.post('/login', (req, res, next)=>{

    users.findOne({username: req.body.uname, password: req.body.pswd},(err, docs)=>{
        if(!docs)
        {
            console.log("User Not Found!")
            res.render("login")
        } else{
            console.log("User found")
            res.render("home")
        }
        
    })
    
})

router.get('/logout', (req, res, next)=>{
    res.render("login")
})

module.exports = router;