const mongoose = require('mongoose');

const resturant = new mongoose.Schema({

    name:{type:String,}
});

const Resturant = mongoose.model('Resturant' , resturant , 'vangs');

module.exports = Resturant;