nock memory leak

node version: 16.10.0
yarn version: 1.22.19

yarn install
yarn test

comment out

```
const nock = require('nock');

...

afterAll(() => {
    nock.cleanAll();
    nock.restore();
});
```

and tests pass