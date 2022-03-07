const mailConfig=require('../Config/MailConfig');
const nodemailer = require('nodemailer');
const transporter=require('../Config/MailConfig');

class EmailService {
    async sendFormMessage(name,email,message){
        try {
            const mail = {
                from: '"Avanqard " <freshmarket.message@gmail.com>',
                to: 'alfa.sushi.message@gmail.com',
                subject: `${name} has sent a message`,
                text: `From : ${email}`,
                html: `<b>${message}</b>`,
            }
             await transporter.sendMail(mail,(err,info)=>{
                 if (err)
                     console.log(err)
                 else
                     console.log(info);
             });
           console.log('2')

        }catch (error){
            return error;
        }
    }

    async sendServiceMessage(name,phone){
        try {
            const mail = {
                from: '"Avanqard " <freshmarket.message@gmail.com>',
                to: 'alfa.sushi.message@gmail.com',
                subject: `${name} has sent a message`,
                html: `<b>'Texniki problem var . Güc hesablanması lazımdır . Mobil : ${phone}'</b>`
            }

            await transporter.sendMail(mail,(err,info)=>{
                if (err)
                    console.log(err)
                else
                    console.log(info);
            });
        }catch (error){
            return error;
        }

    }






}

module.exports=new EmailService();