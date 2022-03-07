const {Schema,model} = require('mongoose');
const TableImageSchema=new Schema({
    Name:{type:String,unique: true},
    Image:{data:Buffer}
},{timestamps: true,virtual:true});
module.exports=model('TableImage',TableImageSchema);