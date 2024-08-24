import env from "@/config/env.config.mjs";
import sender from "@/lib/nodemailer";
import fs from "fs";
import path from "path";
import ejs from "ejs";

// Preload the template

const sendAccountCreationEmail = async (to: string, user: { name: string, email: string, password: string }) => {
  try {
    const newMemberTemplate = fs.readFileSync("template/new-member.ejs", "utf-8");
    // Compile the template with EJS and pass in the context
    const htmlContent = ejs.render(newMemberTemplate, {
      logoUrl: `${env.BASE_URL}/logo.png`,
      userName: user.name,
      userEmail: user.email,
      userPassword: user.password,
      loginUrl: `${env.BASE_URL}/auth/login`,
      supportEmail: "support@alsadaq.com",
      websiteUrl: `${env.BASE_URL}/`
    });

    // Send the email
    await sender.sendMail({
      to,
      from: env.EMAIL_FROM,
      subject: "Welcome to Al-Sadaq!",
      html: htmlContent,
    });

    console.log(`Account creation email sent to ${to}`);
  } catch (error) {
    console.error("Failed to send account creation email:", error);
  }
};

export default sendAccountCreationEmail;
