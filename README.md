# Reference:
- [Github](https://github.com/alexfernandez/loadtest)
- [npm](https://www.npmjs.com/package/loadtest)

# Usage
Installation:
```
yarn add --dev loadtest
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
    url: '<add here..>'
};

loadtest.loadTest(opts, (error, result) => {
    if (error) return console.error('Got an error: %s', error);
    console.log('Tests run sucessfull:', result);
});
```

Execute:
```
node test/load/load-template.js
```


# Next
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