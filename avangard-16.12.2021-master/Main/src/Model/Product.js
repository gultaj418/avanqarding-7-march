const {Schema,model} = require('mongoose');

const ProductSchema=new Schema({
    Name:{type:String},
    Title:{type:String},
    Power:{type:String},
    SpecificationTitle:{type:String},
    TableImage:{type: Schema.Types.ObjectId, ref: "TableImage"},
    TableImageUrl:{type:String},
    Description:[{type:String}],
    ExtraDescription:[{type:String}],
    Image: {type: Schema.Types.ObjectId, ref: "Image"},
    ImageUrl:{type:String},
    ExtraImage: {type: Schema.Types.ObjectId, ref: "ExtraImage"},
    ExtraImageUrl:{type:String}
},{timestamps: true});


module.exports=model('Product',ProductSchema);