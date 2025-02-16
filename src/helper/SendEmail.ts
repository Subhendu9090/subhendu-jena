import nodemailer from 'nodemailer'
 
// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for port 465, false for other ports
//   auth: {
//     user: "maddison53@ethereal.email",
//     pass: "jn7jnAPss4f63QBp6D",
//   },
// });
// Looking to send emails in production? Check out our Email API/SMTP product!
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9f1c5c96dc5380",
    pass: "b13ea058627316"
  }
});
export async function SendEmail(subject:string,message:string,from:string) {
 
  const info = await transporter.sendMail({
    from: from,
    to: "subhendu@gmail.com",
    subject: subject,
    text: message,
    html: `<p>${message}<p/>`,
  });

  console.log("Message sent: %s", info.messageId);
}