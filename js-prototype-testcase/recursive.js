function test(){
    console.log(arguments,   arguments[0])
    console.log('test', arguments.callee.caller);

    arguments.callee();
    // test();
}

function foo(){
    test(1,2,"foobar");
}

foo();

