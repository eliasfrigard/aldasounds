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
      })

      const mailOptions = {
        from: 'info@aldasounds.com',
        to: 'elias_frigard@hotmail.com',
        subject: `ALDASOUNDS.COM New Contact Message! `,
        html: `
          <p><b>From: </b>${req.body.name}</p>
          <p><b>E-Mail: </b>${req.body.email}</p>
          <p><b>Phone: </b>${req.body.phone}</p>
          <p><b>Subject: </b>${req.body.subject}</p>
          <p><b>Message:</b></p>
          <p>${req.body.message}</p>
        `
      }
      
      // Send email.
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error)
          res.sendStatus(500)
        } else {
          console.log('Email sent: ' + info.response);
          res.sendStatus(200)
        }
      })
    } catch (error) {
      res.status(500).send('Error')
    }
  }
}
