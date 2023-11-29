import nodemailer from "nodemailer";
import dotenv from "dotenv";


dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "yurash862@meta.ua",
    pass: process.env.PASSWORD_MAIL,
  },
});

const sendEmail = async (data) => {
  const email = {
    ...data,
    subject: "Please confirm your email",
    text: "Confirm email",
    from: "yurash862@meta.ua",
  };
  const response = await transporter.sendMail(email);
  return response;
};

export default sendEmail;
