import axios from 'axios';
import FormData from 'form-data';

interface SessionOptions {
  success_url?: string;
  cancel_url?: string;
  [key: string]: any;
}

class EmbloySession {
  mode: string;
  job_slug: string;
  success_url?: string;
  cancel_url?: string;

  constructor(mode: string, job_slug: string, options: SessionOptions = {}) {
    this.mode = mode;
    this.job_slug = job_slug;
    Object.assign(this, options);
  }
}

class EmbloyClient {
  clientToken: string;
  session: EmbloySession;
  apiUrl: string = 'https://api.embloy.com';
  baseUrl: string = 'https://embloy.com';
  apiVersion: string = 'api/v0';

  constructor(clientToken: string, session: EmbloySession) {
    if (typeof clientToken !== 'string') {
      throw new Error('clientToken must be a string');
    }
    this.clientToken = clientToken;
    this.session = session;
  }

  private getFormDataAndHeaders(): { data: any, headers: any } {
    let data;
    let headers = { 
      'client_token': this.clientToken,
      // Add other necessary headers here
    };
  
    if (typeof window === 'undefined') {
      // Node.js environment
      const FormData = require('form-data');
      data = new FormData();
      headers = { ...headers, ...data.getHeaders() };
    } else {
      // Browser environment
      data = new FormData();
    }
  
    data.append('mode', this.session.mode);
    data.append('job_slug', this.session.job_slug);
    if (this.session.success_url) {
      data.append('success_url', this.session.success_url);
    }
    if (this.session.cancel_url) {
      data.append('cancel_url', this.session.cancel_url);
    }
  
    return { data, headers };
  }
  
  async makeRequest(): Promise<string> {
    const { data, headers } = this.getFormDataAndHeaders();
  
    try {
      const response = await axios.post(`${this.apiUrl}/${this.apiVersion}/sdk/request/auth/token`, data, { headers });
      if (response.status !== 200) {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
      const requestToken = response.data.request_token;
      return `${this.baseUrl}/sdk/apply?request_token=${requestToken}`;
    } catch (error) {
      console.error('Error in makeRequest:', error);
      throw error;
    }
  }
}

export { EmbloyClient, EmbloySession };