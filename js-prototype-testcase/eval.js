var assert = require('assert');

function foo(a, b){
    return a + b;
}

eval('var bar = ' + foo.toString());

assert.equal(bar(1, 2), foo(1, 2));