#! /usr/local/bin/node

//练习目的是理解 prototype 和 constructor 及 instanceof 的关联

var assert = require('assert');

function Animal(name){
    this.name = name;
}

Animal.prototype = {
    getName: function(){
        return this.name;
    }
};

// Animal.prototype.getName = function(){
//     return this.name;
// };


function Cat(name){
    Animal.call(this, name);
    // Animal.apply(this, arguments); //the same effect. 
}

Cat.prototype = new Animal(); //prototype is a Object instance!

//---------------------------\\

var animal = new Animal('神兽');
var cat = new Cat('咪咪');
console.log(111, animal.prototype, Animal.constructor)

assert.equal(animal.getName(), '神兽');
assert.equal(cat.getName(), '咪咪');

// assert.equal(animal.constructor, Object);
assert.equal(animal.constructor, Animal);
assert.equal(cat.constructor, Cat);

assert.equal(animal instanceof Animal, true);
assert.equal(cat instanceof Cat, true);




