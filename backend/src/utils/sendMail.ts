import nodemailer from "nodemailer";
require("dotenv").config();

interface IMailData {
  to: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "yurash862@meta.ua",
    pass: process.env.PASSWORD_MAIL,
  },
});

const sendEmail = async (data: IMailData) => {
  const email = {
    ...data,
    subject: "Please confirm your email",
    text: "Confirm email",
    from: "yurash862@meta.ua",
  };
  const response = await transporter.sendMail(email);
  return response;
};

export default sendEmail