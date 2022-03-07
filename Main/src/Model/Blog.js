const {Schema,model} = require('mongoose');
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const BlogSchema=new Schema({
    Title:{type:String},
    Description:[{type:String}],
    Subtitle_2:{type:String},
    Description_2:[{type:String}],
    Subtitle_3:{type:String},
    Description_3:[{type:String}],
    ImageID: {type: Schema.Types.ObjectId, ref: "BlogImage"},
    ImageUrl:{type:String},
    ExtraImageID: {type: Schema.Types.ObjectId, ref: "ExtraBlogImage"},
    ExtraImageUrl:{type:String},
    BlogCreatedAt  : { type: String,default:new Date().toLocaleString('AZ', options)},
});


module.exports=model('Blog',BlogSchema);