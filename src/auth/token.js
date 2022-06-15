const {
    google
} = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('./client_secret_943529872288-r3l76j9f6v3fnkjek87l9crc4hd4p7ts.apps.googleusercontent.com.json');

// Replace with the code you received from Google
const code = '4/0AX4XfWinBbhC_h4_ZoZ8DjutF6TxMaOQkB8EkOTz2DamcddVkz15o7MiVfb1gTh4KwEFng';
const {
    client_secret,
    client_id,
    redirect_uris
} = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);

oAuth2Client.getToken(code).then(({
    tokens
}) => {
    const tokenPath = path.join(__dirname, 'token.json');
    fs.writeFileSync(tokenPath, JSON.stringify(tokens));
    console.log('Access token and refresh token stored to token.json');
});