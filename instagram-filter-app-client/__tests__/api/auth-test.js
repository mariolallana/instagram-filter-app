// __tests__/api/auth-test.js
jest.mock('../../api/auth', () => ({
    getAuthorizationCode: jest.fn(),
    exchangeCodeForToken: jest.fn(),
  }));
  
  const { authenticateUser } = require('../../api/auth');
  
  // Mock implementations
  const mockAuthCode = 'mock_auth_code';
  const mockAccessToken = 'mock_access_token';
  
  getAuthorizationCode.mockResolvedValue(mockAuthCode);
  exchangeCodeForToken.mockResolvedValue(mockAccessToken);
  
  describe('Instagram Authentication', () => {
    it('correctly authenticates a user and returns an access token', async () => {
      await expect(authenticateUser()).resolves.toBe(mockAccessToken);
    });
  });
  