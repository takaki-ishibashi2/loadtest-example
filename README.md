# Official sources
- [Github](https://github.com/alexfernandez/loadtest)
- [npm](https://www.npmjs.com/package/loadtest)

# Usage
Installation:
```
yarn add package.json
```

Edit template:
```
// vim test/load/load-template.js

"use strict";
const loadtest = require("loadtest");
const opts = {
    concurrency: 1,
    insecure: true,
    method: 'GET',
    maxRequests: 10,
    requestPerSecond: 2,
    timeout: 3000,
    url: '' <= add testing url
};
:
```

Run testing:
```
node test/load/load-template.js
```


# Next step
Validation more case:
```
// Normal operation
- Testing time = long
- Req / sec = low

// Released
- Testing time = long
- Req / sec = FROM low TO high

// Peak time
- Testing time = short
- Req / sec = high
```
