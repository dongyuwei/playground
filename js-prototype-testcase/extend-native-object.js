#!node --harmony 

// 练习目的是 了解如何扩展原生对象原型方法/属性
// 要尽量避免这么做！why? conflict/overwrite, iteration bug...
// 推荐 underscore.js

var assert = require('assert');

String.prototype.test = function(){
    return 'foo ' + this + ' bar';// what's `this`?
};

Object.prototype.foo = 'bar';
Object.prototype['dirty method'] = function(){
    return 'dirty';
};

Array.prototype.size = function(){
    return this.length;
};


assert.equal("prototype".test(), 'foo prototype bar');
assert.equal("prototype".foo, 'bar');
assert.equal([1,2,3].size(), 3);

var obj = {
    'test': 'haha', 
    'kkk': 'vvv'
};

var map = new Map();
for(var key in obj){
    // if(obj.hasOwnProperty(key)){
        // console.log(key);
        map.set(key, obj[key]);
    // }
}

assert.equal(map.has('foo'), true);




