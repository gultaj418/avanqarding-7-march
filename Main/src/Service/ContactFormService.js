const mailService=require('./EmailService');
const messageRepository=require('../Repository/ClientMessageRepository');
class ContactFormService {

 async saveInDbAndSendEmail(name,email,phone,companyName,subject,message){
     try {
         await messageRepository.messageModel(name, email, phone, companyName, subject, message);
     }catch (error){
         return error;
     };
     };

};

module.exports=new ContactFormService();