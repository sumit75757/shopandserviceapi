const sendMail = require("./gmail.sender");
// import sendMail from "./gmail.sender";

const main = async (email:any) => {
  //   const fileAttachments = [
  //     {
  //       filename: "attachment1.txt",
  //       content: "This is a plain text file sent as an attachment",
  //     },
  //     {
  //       path: path.join(__dirname, "./attachment2.txt"),
  //     },
  //     {
  //       filename: "websites.pdf",
  //       path: "https://www.labnol.org/files/cool-websites.pdf",
  //     },

  //     {
  //       filename: "image.png",
  //       content: fs.createReadStream(path.join(__dirname, "./attach.png")),
  //     },
  //   ];
  // from: process.env.GMAIL,
  //           to: req.body.email,
  //           subject: +"otp is" + otp,
  //           text: otp,
  //           // amp: '',
  //           html: html,
  const options = {
    to: email.to,
    subject: email.subject,
    text: email.text,
    html: email.html,
    // attachments: fileAttachments,
    textEncoding: "base64",
    headers: [{
        key: "X-Application-Developer",
        value: "Amit Agarwal"
      },
      {
        key: "X-Application-Version",
        value: "v1.0.0.2"
      },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

export default main