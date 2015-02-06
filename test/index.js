'use strict';

var test = require('tape');

var childModule1 = require('../index.js');

test('childModule1 is a function', function t(assert) {
    assert.equal(typeof childModule1, 'function');
    assert.end();
});
