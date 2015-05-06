#! /usr/local/bin/node

var assert = require('assert');

function Animal(name){
    this.name = name;

    this.say = function(){
        return 'hi ' + this.name;
    };
}

Animal.prototype.getName = function(){
    return this.name;
};

var dog = new Animal('snoopy');

assert.equal(dog.getName(), 'snoopy');
assert.equal(dog.say(), 'hi snoopy');
assert.equal(dog.constructor, Animal);