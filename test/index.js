var test = require('tape');

var schemaAst = require('../index.js');

test('schemaAst is a function', function (assert) {
    assert.equal(typeof schemaAst, 'function');
    assert.end();
});
