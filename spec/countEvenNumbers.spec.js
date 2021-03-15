const assertEquals = require("./test-framework.js");

//ACCEPTANCE 1
console.log('Checks that [1,2,3,4,5,6] => 3');
//1.Setup
let input = [1,2,3,4,5,6];
let expectedOutput = 3;

//2.Execute
let actualOutput = countEvenNumbers(input);

//3.Verify
let result = assertEquals(actualOutput, expectedOutput);
console.log(result)

//ACEPTANCE 2
console.log('Checks that [0,1,2] => 2');
//1.Setup
input = [0,1,2];
expectedOutput = 2;

//2.Execute
actualOutput = countEvenNumbers(input);

//3.Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

//ACEPTANCE 3
console.log('Checks that [1,3,5] => 0')
//1.Setup
input = [1,3,5];
expectedOutput = 0;

//2.Execute
actualOutput = countEvenNumbers(input);

//3.Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(result);