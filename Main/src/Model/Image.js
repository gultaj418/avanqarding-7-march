const {Schema,model} = require('mongoose');

const ImageSchema=new Schema({
    Name:{type:String,unique: true},
    Image:{data:Buffer}
},{timestamps: true});

module.exports=model('Image',ImageSchema);