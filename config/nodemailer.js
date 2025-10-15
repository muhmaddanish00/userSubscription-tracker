import nodemailer from 'nodemailer';

export const accountEmail = process.env.EMAIL_USER;

const transporter = nodemailer.createTransport({
  service: 'gmail.com',
  auth: {
    user: accountEmail,
    pass: process.env.EMAIL_PASSWORD,
  }
})

export default transporter;