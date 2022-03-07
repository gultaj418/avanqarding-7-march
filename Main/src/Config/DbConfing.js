const mongoose=require('mongoose');
mongoose.set('bufferCommands',false);
require('dotenv').config()
const connection = async() => {
    try {
        await mongoose.connect(process.env.db_url);
    }catch(error){
       return error;
    };
};
module.exports=connection;



