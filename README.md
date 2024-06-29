# [Embloy-Node](https://www.npmjs.com/package/embloy) &middot; [![GitHub license](https://img.shields.io/badge/license-AGPL3.0-blue.svg)](https://github.com/Embloy/Embloy-Node/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/embloy.svg?style=flat)](https://www.npmjs.com/package/embloy-node) [![Issues](https://img.shields.io/github/issues/Embloy/Embloy-Node)](https://github.com/Embloy/Embloy-Node/issues) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Embloy/Embloy-Node/pulls)

Embloy's Node SDK for interacting with your Embloy integration.

## Usage

> _**NOTE**: For more details, see the [developers documentation](https://developers.embloy.com/docs/sdks/overview) at [developers.embloy.com](https://developers.embloy.com)._

Install Embloy-Node SDK:

```Bash
npm install embloy
```

Integrate it in your service:

```Typescript title="your-example-service.ts"
import { EmbloyClient, EmbloySession } from 'embloy';

const session = new EmbloySession({
  mode: "job",
  job_slug: "your-job-slug",
  success_url: "your-success-url",
  cancel_url: "your-cancel-url",
});
const embloy = new EmbloyClient("your-client-token", session);

embloy.makeRequest()
  .then(result => window.location.href = result)
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
