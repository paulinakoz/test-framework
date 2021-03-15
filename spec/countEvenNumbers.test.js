const countEvenNumbers = require("./countEvenNumbers.js")
let countNumbers;

//ACCEPTANCE 1
test('Checks that [1,2,3,4,5,6] => 3', () => {
    countNumbers = new Count;
    expect(countEvenNumbers([1,2,3,4,5,6]).toBe(3));
});

//ACEPTANCE 2
test('Checks that [0,1,2] => 2', () => {
    countNumbers = new Count;
    expect(countEvenNumbers([0,1,2]).toBe(2));
});

//ACEPTANCE 3
test('Checks that [1,3,5] => 0', () => {
    countNumbers = new Count;
    expect(countEvenNumbers([1,3,5]).toBe(0));
});
