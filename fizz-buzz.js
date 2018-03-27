export default class fizzBuzz {

    constructor(lowerBound, upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.returnValue = [];
    }

    calculate() {

        for (var currentNumber = this.lowerBound; currentNumber <= this.upperBound; currentNumber++) {
            var valueToPush = "";
            if (currentNumber % 3 === 0) {
                valueToPush = "fizz";
            }
            if (currentNumber % 5 === 0) {
                valueToPush += "buzz";
            }
            this.returnValue.push((valueToPush === "") ? currentNumber.toString() : valueToPush);
        }
        return this.returnValue;
    }

    reverseAndDelete() {
        this.calculate();
        for (var index = 0; index < this.returnValue.length; index++) {
            if (this.returnValue[index] === "fizz"
                || this.returnValue[index] === "buzz"
                || this.returnValue[index] === "fizzbuzz") {
                this.returnValue[index] = index + 1;
            }
        }
        return this.returnValue.reverse();
    }
}





