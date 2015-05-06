#! /usr/local/bin/node

//练习目的是理解 prototype 和 constructor 及 instanceof 的关联

var assert = require('assert');

function Animal(name){
    this.name = name;
}

var animal = new Animal('神兽');


//QA: 还没有接触 prototype，assert都符合预期吗？

assert.equal(Animal.name, 'Animal');
assert.equal(animal.name, '神兽');
assert.equal(animal.constructor, Animal);
assert.equal(animal instanceof Animal, true);
assert.equal(typeof animal, 'object');




