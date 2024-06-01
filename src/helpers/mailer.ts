import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, type, userId }: any) => {
    try {
        let hashToken = "";

        if (type === "VERIFY" || type === "RESET") {
            hashToken = await bcryptjs.hash(userId.toString(), 10);
            const updateField = type === "VERIFY" ? "verifyToken" : "forgotPasswordToken";
            const expiryField = type === "VERIFY" ? "verifyTokenExpiry" : "forgotPasswordTokenExpiry";
            
            await User.findByIdAndUpdate(userId, {
                [updateField]: hashToken,
                [expiryField]: Date.now() + 3600000
            });
        } else {
            throw new Error("Invalid email type");
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "6ba646b119df79",
                pass: "b9b87c4d5a4a2b"
            }
        });

        const mailOptions = {
            from: "mihirkantthakur867@gmail.com",
            to: email,
            subject: type === "VERIFY" ? "Verify your email address" : "Reset your password",
            html: `
                <p>Click 
                    <a href="${process.env.DOMAIN}/${type === 'VERIFY' ? 'verifyemail' : 'reset'}?token=${hashToken}">
                        here
                    </a> 
                    to ${type === "VERIFY" ? "verify the account" : "reset the password"}
                </p>
            `
        };

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error:any) {
        throw new Error(`Email sending failed: ${error.message}`);
    }
};
