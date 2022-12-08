import main from "../sender";
import otpGenerator from "otp-generator";
let otp: any = "";
require("dotenv").config();

const otpdata: any[] = [];

const emailservice = {
  email(req: any, res: any) {
    otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,

      lowerCaseAlphabets: false,
    });
    console.log("otp is", otp);
    console.log(otpdata);
    const html: string =
      `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2"><div style="margin:50px auto;width:70%;padding:20px 0"><div style="border-bottom:1px solid #eee"><a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a></div><p style="font-size:1.1em">Hi,</p><p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p><h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">` +
      otp +
      `</h2><p style="font-size:0.9em;">Regards,<br />Your Brand</p><hr style="border:none;border-top:1px solid #eee" /><div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300"><p>Your Brand Inc</p><p>1600 Amphitheatre Parkway</p><p>California</p></div></div></div>`;

    const email = {
      from: process.env.GMAIL,
      to: req.body.email,
      subject: "otp is " + otp,
      text: otp,
      // amp: '',
      html: html,
    };
    main(email)
      .then((emailsend) => {
        otpdata.push({
          email: req.body.email,
          otp: otp,
          time: new Date().getTime(),
        });
        res.status(200).json(emailsend);
      })
      .catch((Err) => {
        res.status(400).json(Err);
      });
  },

  verify(req: any, res: any) {
    console.log(otpdata);
    console.log(new Date().getTime());

    let getotps: any = otpdata.filter((d) => (req.body.email = d.email));
    console.log(getotps);

    if (getotps) {
      getotps[0].otp == req.body.otp
        ? res.status(200).json({
            status: true,
            messge: "You has been successfully registered",
          })
        : res.status(400).json({
            status: false,
            messge: "You has not been registered",
          });
    }
  },
};

export default emailservice;

function deleteOtp() {
  otpdata.forEach((element) => {
    console.log("asdgasdf", element);
    if (new Date().getTime() > element.time) {
      let deletedata = otpdata.filter((item) => item.email !== element.email);
      console.log("asdgaasdfasdf", deletedata);
    } else {
      console.log("not done");
    }
    console.log(new Date().getTime());
  });
}
const get = setInterval(deleteOtp, 300000);
