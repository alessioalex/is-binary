# is-binary

Detects if a file is binary based on its content.
[![build status](https://secure.travis-ci.org/alessioalex/is-binary.png)](http://travis-ci.org/alessioalex/is-binary)

## Usage

```js
isBinary(content)
```

Example:

```js
var assert = require('assert');
var fs = require('fs');
var isBinary = require('is-binary');

assert.equal(isBinary(fs.readFileSync('sample.pdf', 'utf8')) === false);
```

## Tests

```
npm test
```

## Inspiration

Main source code extracted from https://github.com/bevry/istextorbinary/, MIT licensed.

Tests inspired by https://github.com/gjtorikian/isBinaryFile, MIT licensed.

## License

MIT http://alessioalex.mit-license.org/
