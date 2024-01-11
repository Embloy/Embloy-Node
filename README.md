# Embloy Node

Embloy's Node SDK for interacting with your Embloy integration.

## Usage

Install Embloy-Node SDK:

```Bash
npm install embloy
```

Integrate it in your service:

```javascript
// In your application or script
const embloy = new EmbloyClient('your-client-token', {
  mode: "job",
  job_slug: "your-job-slug",
  success_url: "your-success-url",
  cancel_url: "your-cancel-url",
});

embloy.makeRequest()
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
```

## Publish Package
```Bash
npm publish
```

---

© Carlo Bortolan, Jan Hummel

> Carlo Bortolan &nbsp;&middot;&nbsp;
> GitHub [@carlobortolan](https://github.com/carlobortolan) &nbsp;&middot;&nbsp;
> contact via [bortolanoffice@embloy.com](mailto:bortolanoffice@embloy.com)
>
> Jan Hummel &nbsp;&middot;&nbsp;
> GitHub [@github4touchdouble](https://github.com/github4touchdouble) &nbsp;&middot;&nbsp;
> contact via [hummeloffice@embloy.com](mailto:hummeloffice@embloy.com)
