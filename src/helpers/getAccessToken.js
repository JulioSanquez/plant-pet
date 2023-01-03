import { GoogleAuth, OAuth2Client } from 'google-auth-library';

export default async function getAccessToken() {
  const clientId = '252211906294-f7rjku7tlegc7nl34q7s4qou5lbp20ip.apps.googleusercontent.com';
  const clientSecret = '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';
  const redirectUri = 'https://plantpet.netlify.app/dashboard';
  const auth = new GoogleAuth();
  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

  // Generate the url that will be used for the consent dialog.
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  // Open the browser to the authorize url to allow the user to grant permission
  // window.open(authorizeUrl, '_blank');

  // Wait for the authorization code
  // const code = await prompt('Enter the authorization code: ');

  // Get the access token
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // Return the access token
  return tokens.access_token;
}
