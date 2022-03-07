const {Schema,model} = require('mongoose');

const BlogImageSchema=new Schema({
    BlogId:{type: Schema.Types.ObjectId, ref: "Blog"},
    Image:{data:Buffer}
},{timestamps: true});

module.exports=model('BlogImage',BlogImageSchema);