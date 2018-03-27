export default class fizzBuzz {

    constructor(lowerBound, upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
    }
    
    calculate() {
        var returnValue=[];
        for (var currentNumber = this.lowerBound; currentNumber <= this.upperBound; currentNumber++) {
            if (currentNumber === 3) {
                returnValue.push("fizz");
                continue;
            }
            returnValue.push(currentNumber.toString());
        }
        return returnValue;
    }
    
    
}





