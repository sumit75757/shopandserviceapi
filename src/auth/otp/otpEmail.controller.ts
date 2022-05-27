import mongoos from "mongoose";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
let otp: any = '';
require("dotenv").config();

const emailservice = {
    email(req: any, res: any) {
        const mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL,
                pass: process.env.GMAIL_PASS
            }
        });
        otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, digits: true, lowerCaseAlphabets: false })
        console.log("otp is", otp);
        console.log(req.body);
        const html: string = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2"><div style="margin:50px auto;width:70%;padding:20px 0"><div style="border-bottom:1px solid #eee"><a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a></div><p style="font-size:1.1em">Hi,</p><p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p><h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">`+otp+`</h2><p style="font-size:0.9em;">Regards,<br />Your Brand</p><hr style="border:none;border-top:1px solid #eee" /><div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300"><p>Your Brand Inc</p><p>1600 Amphitheatre Parkway</p><p>California</p></div></div></div>`


        const email = ({
            from: process.env.GMAIL,
            to: req.body.email,
            subject: +"otp is" + otp,
            text: otp,
            // amp: '',
            html: html,
        });

        mailTransporter.sendMail(email, (err: any, data: any) => {
            if (err) {
                res.status(400).json({
                    messge: 'email not sent',
                    err,
                    email
                })
                // saveEmail(res);
                

                console.log('Error Occurs', email);
            } else {
                res.status(200).json({
                    messge: 'email sent',
                })
                console.log('Email sent successfully', data);

            }
        });
    },

    verify(req: any, res: any) {
        if (req.body.otp == otp) {
            res.status(200).json({
                status: true,
                messge: 'You has been successfully registered',
            })
        }
        else {
            res.status(400).json({
                status: false,
                messge: 'You has not been registered',
            })
        }
    }
}


export default emailservice