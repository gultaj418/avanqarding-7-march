const {Schema,model} = require('mongoose');

const ExtraBlogImageSchema=new Schema({
    BlogId:{type: Schema.Types.ObjectId, ref: "Blog"},
    Image:{data:Buffer}
},{timestamps: true});

module.exports=model('ExtraBlogImage',ExtraBlogImageSchema);