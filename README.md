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
import { EmbloyClient, EmbloySession } from 'embloy';

const session = new EmbloySession({
  mode: "job",
  job_slug: "job#1",
}); // Other fields are optional
const embloy = new EmbloyClient(clientToken, session);

embloy.makeRequest()
  .then(result => window.location.href = url)
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
