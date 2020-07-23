const mongoose = require('mongoose')

const walmartSchema = new mongoose.Schema({
    _id:String,
    id:Number,
    brand:String,
    description:String,
    image:String,
    price:Number
  },{collection:'data'});


  module.exports = walmartSchema; 