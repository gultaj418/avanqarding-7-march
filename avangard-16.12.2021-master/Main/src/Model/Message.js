const {Schema,model} = require('mongoose');
const mongoose = require("mongoose");
require('mongoose-long')(mongoose);
const {Types: {Long}} = mongoose;

const MessageSchema=new Schema({
    Email : {type:String},
    Name : {type:String},
    CompanyName:{type:String},
    Subject : {type:String},
    Message : {type:String},
    PhoneNumber:{type:Long},
},{timestamps: true});

module.exports=model('Message',MessageSchema);