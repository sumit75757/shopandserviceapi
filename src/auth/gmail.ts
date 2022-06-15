const { google } = require("googleapis");
const credentials = require("./client_secret_943529872288-r3l76j9f6v3fnkjek87l9crc4hd4p7ts.apps.googleusercontent.com.json");
const { client_secret, client_id, redirect_uris } = credentials.installed;
console.log(redirect_uris);
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris
);

const GMAIL_SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

const url = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: GMAIL_SCOPES,
});

console.log("Authorize this app by visiting this url:", url);
