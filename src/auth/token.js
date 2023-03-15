let {
  google
} = require("googleapis");
let path = require("path");
let fs = require("fs");
let credentials = require("./cradansial.json");
require("dotenv").config();

// Replace with the code you received from Google
let code =
  "4/0AWtgzh4JilfLbRMkOaZKsE5gGbKOhGnaMCB6sIccJ1koPv_lEqRShmnFkGZzjz0N6ycGdw";
const {
  client_secret,
  client_id,
  redirect_uri
} = credentials.web;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uri
);
oAuth2Client.getToken(code).then(({
  tokens
}) => {
  const tokenPath = path.join(__dirname, "token.json");
  fs.writeFileSync(tokenPath, JSON.stringify(tokens));
  //console.log("Access token and refresh token stored to token.json");
}).catch(err => {
  console.log(err.message);
});