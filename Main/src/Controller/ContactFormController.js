const { validationResult, check } = require("express-validator");
const contactFormService = require("../Service/ContactFormService");
const emailService = require("../Service/EmailService");

class ContactFormController {
  async sendMessageToAdmin(req, res, next) {
    try {
      const { name, email, phone, companyName, subject, message } = req.body;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send({ error: errors.mapped()});
      }
      contactFormService.saveInDbAndSendEmail(
        name,
        email,
        phone,
        companyName,
        subject,
        message
      );
      emailService.sendFormMessage(name, email, message);
      res.send({ message: "successfully submited!" });

    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ContactFormController();
