# Embloy Node

Embloy's Node SDK for interacting with your Embloy integration.

## Usage

Install Embloy-Node SDK:

```Bash
npm install embloy
```

Integrate it in your service:

```javascript
// Replace 'YOUR_CLIENT_TOKEN' with your actual client token

const embloy = new EmbloyClient('your-client-token', {
  mode: "job",
  job_slug: "your-job-slug",
  success_url: "your-success-url",
  cancel_url: "your-cancel-url",
});

embloy.makeRequest()
  .then(result => console.log(result))
  .catch(error => console.error(error.message));

## Publish Package
```Bash
npm publish
```