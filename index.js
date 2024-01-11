const axios = require('axios');

class EmbloyClient {
  constructor(clientToken, session) {
    this.clientToken = clientToken;
    this.session = session;
    this.baseUrl = 'https://api.embloy.com';
    this.apiVersion = 'api/v0';
  }

  async makeRequest() {
    try {
      const response = await axios.post(
        `${this.baseUrl}/${this.apiVersion}/sdk/request/auth/token`,
        {
          mode: this.session.mode,
          success_url: this.session.success_url,
          cancel_url: this.session.cancel_url,
          job_slug: this.session.job_slug,
        },
        {
          headers: {
            client_token: this.clientToken,
          },
        }
      );

      return this.handleResponse(response);
    } catch (error) {
      throw new Error(`Error making request: ${error.message}`);
    }
  }

  handleResponse(response) {
    switch (response.status) {
      case 200:
        const requestToken = response.data.request_token;
        return `${this.baseUrl}/sdk/apply?token=${requestToken}`;
      default:
        throw new Error(`Error making request: ${response.statusText}`);
    }
  }
}

module.exports = EmbloyClient;
