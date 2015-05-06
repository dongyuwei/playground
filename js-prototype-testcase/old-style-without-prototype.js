#! /usr/local/bin/node

// 练习目的是了解js中的其他面向对象编程方式(非 prototype)
// what's `this`? 

var assert = require('assert');

function Animal(name){
    this.name = name;

    this.getName = function(){
        return this.name;
    };

    this.setName = function(name){
        this.name = name;
    };
}

Animal.classMethod = function(){
    return 'hi ' + this.name;
};

// Animal.prototype = {}; //运行这行代码会怎么样？

var dog = new Animal('旺财');

assert.equal(dog.getName(), dog.name);
assert.equal(dog.getName(), '旺财');

dog.setName('喵喵')
assert.equal(dog.getName(), '喵喵');

assert.equal(dog.constructor, Animal);
assert.equal(dog.constructor.name, 'Animal');//Function's name


assert.equal(Animal.classMethod.call(dog), 'hi 喵喵');




