const {Schema,model} = require('mongoose');

const ExtraImageSchema=new Schema({
    Name:{type:String,unique: true},
    Image:{data:Buffer}
},{timestamps: true});

module.exports=model('ExtraImage',ExtraImageSchema);