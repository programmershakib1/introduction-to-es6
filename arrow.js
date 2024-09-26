// function declaration

// function add(a, b) {
//     const result = a + b;
//     return result;
// }

function add(a, b) {
    return a + b;
}


// function expression
const add2 = function(a, b){
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

const sum = add(5, 90);
console.log(sum);
const sum2 = add2(10, 90);
console.log(sum2);
const sum3 = add3(60, 90);
console.log(sum3);
const sum4 = add4(10, 20 ,30, 40);
console.log(sum4);
const mult = multiply(3, 12);
console.log(mult);