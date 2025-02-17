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
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD
  }
});
export async function SendEmail(subject:string,message:string,from:string,name:string) {
 
  const info = await transporter.sendMail({
    from: from,
    to: "subhendujena38@gmail.com",
    subject:`<h3>${subject} from ${name}</h3>`,
    text: message,
    html: `<p>${message}</p>`,
  });

  console.log("Message sent: %s", info.messageId);
}