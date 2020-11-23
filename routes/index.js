//-- 
const express = require('express');
const router = express.Router();
const upload = require('../labaryUpload/imageUpload');
const {validationResult, check} = require('express-validator');
const Resturant = require('../models/schema_model');


// router Git to git timplate first page- -->
/*
router.get('/' , (req,res)=>{

    Resturant.find( {} , (error, events)=>{

        let chunc = []
        let chuncsize = 3
        for(var i = 0 ; i < events.length ; i+= chuncsize){
         
            check.push(events.slice(i,chuncsize + i));

        }

        res.render('cafe/index');

    });

});*/

//>>----------------------- end Git function ----------------------------->


router.get('/' , (req,res)=>{

    res.render('cafe/index');
})




/*
router.get('/cafe' , (req,res)=>{

 res.render('cafe/index');

});*/








module.exports = router;