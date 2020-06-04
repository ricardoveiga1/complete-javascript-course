/*

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/
//Minha solução
var alturaMark = 1.77;
var pesoMark = 90;

var alturaJhon = 1.80;
var pesoJhon = 75;

imcMark = pesoMark/(alturaMark * alturaMark);
console.log(imcMark)
imcJhon = pesoJhon/(alturaJhon * alturaJhon);
console.log(imcJhon)

var higher = imcMark > imcJhon;
console.log('Is Mark\'s BMI higher than John\'s? ' + higher);


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


if (imcMark > imcJhon) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}