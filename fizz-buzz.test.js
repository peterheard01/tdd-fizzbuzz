import FizzBuzz from "./fizz-buzz";
var assert = require('assert');

it('Should 1,2 Return int 1 as string',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,1);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1"], returnValue);
    });
it('Should 1,2 Return string array [1,2]',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,2);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2"], returnValue);
    });

it('Should 1,3 Return string array [1,2,fizz]',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,3);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2","fizz"], returnValue);
    });

it('Should 1,5 Return string array [1,2,fizz,4,buzz]',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,5);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2","fizz","4","buzz"], returnValue);
    });








