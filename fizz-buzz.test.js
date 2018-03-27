import FizzBuzz from "./fizz-buzz";
var assert = require('assert');

it('Should Return int as string',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,1);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1"], returnValue);
    });

it('Should Return fizz for multiple of 3',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,6);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2","fizz","4","buzz","fizz"], returnValue);
    });

it('Should Return buzz for multiple of 5',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,10);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2","fizz","4","buzz","fizz","7","8","fizz","buzz"], returnValue);
    });

it('Should Return fizzbuzz for 15',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,15);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2","fizz","4","buzz","fizz","7","8","fizz","buzz","11","fizz","13","14","fizzbuzz"], returnValue);
    });
it('Should Return fizzbuzz for 30',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,30);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2","fizz","4","buzz","fizz","7","8","fizz","buzz","11","fizz","13","14","fizzbuzz","16","17","fizz","19","buzz","fizz","22","23","fizz","buzz","26","fizz","28","29","fizzbuzz"], returnValue);
    });








