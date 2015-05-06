var assert = require('assert');

//Function.prototype.bind() demo
//fun.bind(thisArg[, arg1[, arg2[, ...]]])

this.name = 'God';

function say(word) {
    var result = this.name + ' say ' + word;
    console.log(result);
    return result;
}


assert.equal(say.call(this, 'nihao'), 'God say nihao');

var context = {
    "name": "dyw"
};

var binded = say.bind(context, 'hello');

assert.equal(binded(), "dyw say hello");

context = {
    "name": "jiabao"
};

setTimeout(say.bind(context, '你好'), 0);
