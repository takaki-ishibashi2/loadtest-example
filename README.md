### Documentation
- [Github](https://github.com/alexfernandez/loadtest)
- [npmjs](https://www.npmjs.com/package/loadtest)

### Install loadtest
```
yarn add --dev loadtest
```

### Create test
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
    url: '<url>' // e.g. http://localhost:3000
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

### Next
Add test cases of several situation:
```
// Average
- Test time = long
- Requests per second = low

// Release
- TT = long
- RPS = low -> high

// Peak
- TT = short
- RPS = high
```

Use CloudWatch
