"use strict";
const loadtest = require("loadtest");
const opts = {
    concurrency: 1,
    insecure: true,
    method: 'GET',
    maxRequests: 10,
    requestPerSecond: 2,
    timeout: 3000,
    url: ''
};

loadtest.loadTest(opts, (error, result) => {
    if (error) return console.error('Got an error: %s', error);
    console.log('Tests run sucessfull:', result);
});
