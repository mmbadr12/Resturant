//---- connect server mongoDB use mongoose ----->
const db = require('mongoose')
db.Promise = global.Promise;

db.connect('mongodb://127.0.0.1:27017/Resturant',{ 
  useNewUrlParser: true ,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(()=> console.log('database connact'))
.catch((error)=> console.error(error.message));

//>>----------------------------------------------->
