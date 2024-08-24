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
      logoUrl: "https://www.alsadaq.com/logo.svg",
      userName: user.name,
      userEmail: user.email,
      userPassword: user.password,
      loginUrl: "https://www.alsadaq.com/auth/login",
      supportEmail: "support@alsadaq.com",
      websiteUrl: "https://www.alsadaq.com"
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
