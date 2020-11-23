//--- > settings page and setup labayres < -------//
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session')
const db = require('./config/database');
const PORT = 3000;

const app = express();

//--- > router page path < --------//
const indexRoter = require('./routes/index');

//>>-------------------------------------------->


//--- > view setup ingine and fromworck (Ejs) < --------//
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');
//>>---------------------------------------------->

//--- > setup admin page < --------//
app.use('/admin', express.static('./node_modules/admin-lte'));
//>>--------------------------------------------------------->

//--- > view public file path < --------//
app.use(express.static(path.join(__dirname , 'public')));
//>>---------------------------------------------->


//--- > setup body parser < --------//
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//>>---------------------------------------------->


//--- > stupe sieeion express < --------//
app.set('trust proxy', 1) // trust first proxy
app.use(session({
secret: 'milan m&m',
resave: false,
saveUninitialized: false,
cookie: { maxAge : 60000 *15 }
}))
//>>--------------------------------------->

//--- > falsh to send alert < ------//
app.use(flash());
//>>-------------------------->


//-------- >> path pages << -----------||

//--- > Adnmi page path  < ---//
//app.use('/admin' , admin);

//--- > index page path < ---//
app.use('/' , indexRoter);
//>>---------------------------------------------->


//--- > app listener localhost < --------//
app.PORT = process.env.PORT || 3000;
app.listen(PORT,(error)=>{

  console.log(`port connect ${PORT}`);
  console.log(`App Error is -->  ${error}`);

});
//>>---------------------------------------------->