const nodemailer = require("nodemailer");
const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: 'chad52@ethereal.email',
            pass: '1k8cVPdsTqsb9YW52V'
        },
      });

      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <ankit.bqarlson.com>', // sender address
        to: "ankit3001yadav@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
    res.json(info);
};

export default sendMail;