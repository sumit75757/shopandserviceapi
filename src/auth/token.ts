import { google } from "googleapis";
import path from "path";
import fs from "fs";
import credentials from "./cradansial.json";
require("dotenv").config();

const redirect_uri = window.location.origin
// Replace with the code you received from Google
let code =
  "4/0AfgeXvuL2FQdGNW0m8hZ-HxW6Z-SGAilZpb-xq1hQU8TS2VwjUKAfyCj_pv4Zaj58hgAQg";
const { client_secret, client_id } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uri+"/"
);
 oAuth2Client.getToken(code).then(({ tokens }: any) => {
  const tokenPath = path.join(__dirname, "token.json");
  fs.writeFileSync(tokenPath, JSON.stringify(tokens));
  //console.log("Access token and refresh token stored to token.json");
});



