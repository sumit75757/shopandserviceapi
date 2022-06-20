const {
  google
} = require('googleapis');
const MailComposer = require("nodemailer/lib/mail-composer");
import { installed } from "./client_secret_943529872288-r3l76j9f6v3fnkjek87l9crc4hd4p7ts.apps.googleusercontent.com.json"; 
const tokens = require("./token.json");

const getGmailService = () => {
  const {
    client_secret,
    client_id,
    redirect_uris
  } = installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({
    version: "v1",
    auth: oAuth2Client
  });
  return gmail;
};

const encodeMessage = (message: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => {
  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const createMail = async (options: any) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const sendMail = async (options: any) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  const {
    data: {
      id
    } = {id}
  } = await gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: rawMessage,
    },
  });
  return id;
};


module.exports = sendMail