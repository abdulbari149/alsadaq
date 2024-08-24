import env from '@/config/env.config.mjs';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

let sender: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

const options: SMTPTransport.Options = {
  service: "Gmail",
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: true,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
}

if (process.env.NODE_ENV === 'production') {
  sender = nodemailer.createTransport(options);
} else {
  // @ts-ignore
  if (!global.sender) {
    // @ts-ignore
    global.sender = nodemailer.createTransport(options);
  }
  // @ts-ignore
  sender = global.sender;
}

export default sender;