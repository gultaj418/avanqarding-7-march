const model=require('../Model/Message');
class ClientMessageRepository{
    async messageModel(name,email,phone,companyName,subject,message){
        try {
            await model.create({
                Email: email,
                Name: name,
                CompanyName: companyName,
                Subject: subject,
                Message: message,
                PhoneNumber: phone,
            }).catch((err)=>{
                console.log(err);
            });
        }catch (error){
            return error;
        }
       }
}
module.exports=new ClientMessageRepository();