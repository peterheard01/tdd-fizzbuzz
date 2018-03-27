import FizzBuzz from "./fizz-buzz";
var assert = require('assert');

it('Should Return int 1 as string',
    () => {
        //start here
        let fbObj = new FizzBuzz(1);
        var returnValue = fbObj.calculate();
        assert.equal('1', returnValue);

    });









