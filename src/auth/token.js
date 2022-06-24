const {
    google
} = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('./cradansial.json');

// Replace with the code you received from Google
const code = '4/0AX4XfWhfuM84wvplzmqmaJPlGQycOfUUzBblLY8tDq7M-UV6iEdda_Z-oiiJKItt5ychzw';
const {
    client_secret,
    client_id,
    redirect_uri
} = credentials.web;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

oAuth2Client.getToken(code).then(({
    tokens
}) => {
    const tokenPath = path.join(__dirname, 'token.json');
    fs.writeFileSync(tokenPath, JSON.stringify(tokens));
    console.log('Access token and refresh token stored to token.json');
});