# schema-ast

<!--
    [![build status][build-png]][build]
    [![Coverage Status][cover-png]][cover]
    [![Davis Dependency status][dep-png]][dep]
-->

<!-- [![NPM][npm-png]][npm] -->

<!-- [![browser support][test-png]][test] -->

A bunch of helpers for JSON schema

## Example

```js
var V = require("schema-ast");

var requestSchema = V.http.Request({
    method: 'POST',
    body: {
        email: V.email(),
        confirmEmail: V.email(),
        password: V.string({
            'minLength': 8,
            'maxLength': Infinity
        })
    }
});

var responseSchema = V.union([
    V.http.Response({
        statusCode: 200,
        body: schemas.UserModel
    }),
    V.http.TypedError({
        statusCode: 400,
        type: 'services.user.duplicate-email'
    }, {
        email: V.string()
    }),
    V.http.TypedError(LoggedInError),
    V.http.TypedError(EmailNotSameError)
]);
```

## Docs


// TODO. State what the module does.

## Installation

`npm install schema-ast`

## Tests

`npm test`

## Contributors

 - Raynos

## MIT Licenced

  [build-png]: https://secure.travis-ci.org/Raynos/schema-ast.png
  [build]: https://travis-ci.org/Raynos/schema-ast
  [cover-png]: https://coveralls.io/repos/Raynos/schema-ast/badge.png
  [cover]: https://coveralls.io/r/Raynos/schema-ast
  [dep-png]: https://david-dm.org/Raynos/schema-ast.png
  [dep]: https://david-dm.org/Raynos/schema-ast
  [test-png]: https://ci.testling.com/Raynos/schema-ast.png
  [test]: https://ci.testling.com/Raynos/schema-ast
  [npm-png]: https://nodei.co/npm/schema-ast.png?stars&downloads
  [npm]: https://nodei.co/npm/schema-ast
