### Documentation
- [Github](https://github.com/alexfernandez/loadtest)
- [npmjs](https://www.npmjs.com/package/loadtest)

### Installation
```
yarn add --dev loadtest
```

### Edit a test file
```
// vi test/load/load-sample.js

"use strict";
const loadtest = require("loadtest");
const opts = {
    concurrency: 1,
    insecure: true,
    method: 'GET',
    maxRequests: 10,
    requestPerSecond: 2,
    timeout: 3000,
    url: 'http://localhost:3000' // TODO
};

loadtest.loadTest(opts, (error, result) => {
    if (error)
        return console.error('Got an error: %s', error);
    console.log('Tests run sucessfull:', result);
});
```

### Run a test
```
node test/load/load-sample.js
```
