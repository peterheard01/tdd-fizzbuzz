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








