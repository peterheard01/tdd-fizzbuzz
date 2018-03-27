import FizzBuzz from "./fizz-buzz";
var assert = require('assert');

it('Should Return int 1 as string',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,1);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1"], returnValue);
    });
it('Should Return string array [1,2]',
    () => {
        //start here
        let fbObj = new FizzBuzz(1,2);
        var returnValue = fbObj.calculate();
        assert.deepEqual(["1","2"], returnValue);
    });








