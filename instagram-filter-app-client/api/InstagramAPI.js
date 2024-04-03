// api/InstagramAPI.js

import axios from 'axios';

const baseURL = 'https://graph.instagram.com';

const fetchUserMedia = async (accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/me/media`, {
      params: {
        fields: 'id,caption',
        access_token: accessToken,
      },
    });
    return response.data.data; // El array de publicaciones
  } catch (error) {
    console.error('Error fetching media:', error);
    throw error;
  }
};
