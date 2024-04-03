// Parte del cliente: src/DeepLinkingHandler.js
import { useEffect } from 'react';
import { Linking } from 'react-native';
import axios from 'axios';

const DeepLinkingHandler = () => {
  useEffect(() => {
    const getInitialURL = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        handleUrl(initialUrl);
      }
    };

    const handleUrl = async (url) => {
      let { path, queryParams } = Linking.parse(url);
      if (queryParams.code) {
        const response = await axios.post('https://YOUR_SERVER_DOMAIN/exchange-code', {
          code: queryParams.code
        });
        const { access_token, user_id } = response.data;
        // Guardar el access_token de forma segura (por ejemplo, usando AsyncStorage)
        // Y manejar la sesión del usuario con el user_id
      }
    };

    Linking.addEventListener('url', (event) => {
      handleUrl(event.url);
    });

    getInitialURL();

    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  return null;
};

export default Deep
