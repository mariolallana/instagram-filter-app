// Parte del cliente: src/AuthScreen.js
import * as WebBrowser from 'expo-web-browser';

const instagramAppId = 'YOUR_INSTAGRAM_APP_ID';
const redirectUri = 'https://YOUR_USERNAME.github.io/YOUR_REPO/';

const AuthScreen = () => {
  const handlePress = async () => {
    try {
      let result = await WebBrowser.openBrowserAsync(
        `https://api.instagram.com/oauth/authorize?client_id=${instagramAppId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`
      );
      // Manejar el resultado de la autenticación...
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Tu componente UI que incluye un botón o enlace para iniciar el flujo de autenticación
    // <Button onPress={handlePress}>Login with Instagram</Button>
  );
};

export default AuthScreen;
