const nodemailer = require("nodemailer");
const smtpTransport=require('nodemailer-smtp-transport');

module.exports = nodemailer.createTransport( smtpTransport ({
    host               :        "smtp.gmail.com",
    secureConnection   :         false,
    port               :         465,
    domains            :        ["gmail.com", "googlemail.com"],
    auth               :       {
        user: "farhad.aliev2020@gmail.com",
        pass: "bevwlrxpdabodxfg",
    },
    tls                :       {
        rejectUnauthorized:false
    }
}));

