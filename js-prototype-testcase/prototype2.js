#! /usr/local/bin/node

//练习目的是理解 prototype 和 constructor 及 instanceof 的关联

var assert = require('assert');

function Animal(name){
    this.name = name;
}

Animal.prototype = {
    constructor: Animal,

    getName: function(){
        return this.name;
    }
};


function Cat(name){
    //before
    Animal.call(this, name);
    //after      
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

//---------------------------\\

var animal = new Animal('神兽');
var cat = new Cat('咪咪');
// cat.constructor = Cat;

assert.equal(animal.getName(), '神兽');
assert.equal(cat.getName(), '咪咪');

assert.equal(animal.constructor, Animal);
assert.equal(cat.constructor, Cat);

assert.equal(animal instanceof Animal, true);
assert.equal(cat instanceof Cat, true);

// QA: what's the value of `typeof cat` ?
// console.log('typeof cat: ', typeof cat)
