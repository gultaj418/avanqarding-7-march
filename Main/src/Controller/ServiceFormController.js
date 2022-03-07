
const {validationResult, check}=require('express-validator');
const emailService=require('../Service/EmailService');

class ServiceFormController {
    async serviceMessage(req,res,next){
        try {
            const {name,phone}=req.body;
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.send({error:errors.mapped()});
            }
                emailService.sendServiceMessage(name,phone);
                res.send({msg:"Tezliklə sizinlə əlaqə saxlanılacaq"})
        }catch (error){
            console.log(error);
        }
    };
};

module.exports=new ServiceFormController();