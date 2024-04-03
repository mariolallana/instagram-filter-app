// Parte del servidor: server.js
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const instagramClientId = 'YOUR_INSTAGRAM_APP_ID';
const instagramClientSecret = 'YOUR_INSTAGRAM_APP_SECRET';
const redirectUri = 'https://YOUR_USERNAME.github.io/YOUR_REPO/';

app.post('/exchange-code', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', {
      client_id: instagramClientId,
      client_secret: instagramClientSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code: code
    });

    const { access_token, user_id } = response.data;
    res.json({ access_token, user_id });
  } catch (error) {
    console.error('Failed to exchange code:', error.response.data);
    res.status(500).send('An error occurred.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
