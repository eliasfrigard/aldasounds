import nodemailer from 'nodemailer'

/**
 * Class that controls user routes and actions.
 */
export class ContactController {
  // Post new user.
  async send (req, res, next) {
    try {
      const transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 587,
        secure: false,
        auth: {
          user: "info@aldasounds.com",
          pass: 'saxvlnpno'
        }
      });
      
      const mailOptions = {
        from: 'info@aldasounds.com',
        to: 'elias_frigard@hotmail.com',
        subject: `ALDASOUNDS.COM New Contact Message! `,
        html: `
          <p><b>From: </b>Elias Frigård</p>
          <p><b>E-Mail: </b>elias_frigard@hotmail.com</p>
          <p><b>Phone: </b>+46706691374</p>
          <p><b>Subject: </b>Hello!</p>
          <p><b>Message:</b></p>
          <p>AOWIFHAÖOWIUHFÖAOWIFHÖAOWIHFAÖOWIFHAÖOWFH</p>
        `
      }
      
      // Send email.
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
        console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
      res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  }
}
