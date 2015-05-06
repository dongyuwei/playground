#! /usr/local/bin/node
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


var OriginalAnimal =  Animal;
Animal = function(name, age){
    OriginalAnimal.apply(this, arguments);

    this.age = age;
};

Animal.prototype = OriginalAnimal.prototype; // key point!

var cat = new Animal('mao', 100);

assert.equal(cat.getName(), 'mao');
assert.equal(cat.age, 100);

delete cat.name;
assert.equal(cat.getName(), undefined);