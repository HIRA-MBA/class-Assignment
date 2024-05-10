// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles
let miles = 130;
const conversionFactor = 1.60934;
let kilometers = miles * conversionFactor;
console.log(" \n \n \t\t Question number 1 \n\n");
console.log(`The distance of ${miles} miles is equal to ${kilometers} km`);
// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(" \n \n \t\t Question number 2 \n\n");
let dynamicNumber = Math.floor(Math.random() * 10) + 1;
let userInput = await inquirer.prompt({
    name: "number",
    type: "number",
    message: chalk.bgBlueBright("Enter any number from 1 to 10 ")
});
if (userInput.number === dynamicNumber) {
    console.log(chalk.blue(" \n Congratulations ,  you win \n "));
}
else if (userInput.number > dynamicNumber) {
    console.log(chalk.red(" \n Your number is greater than random number \n"));
}
else if (userInput.number < dynamicNumber) {
    console.log(chalk.red(" \n Your number is less than random number \n"));
}
// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// response.
console.log(" \n \n \t\t Question number 3 \n\n");
let username = await inquirer.prompt({
    name: "friend",
    type: "input",
    message: chalk.bgBlueBright(" Enter your name \n ")
});
switch (username.friend) {
    case "Hira":
        console.log(chalk.bgGray(`\n ${username.friend} is a friend`));
        break;
    case "Sara":
        console.log(chalk.bgGray(`\n ${username.friend} is a friend`));
        break;
    case "Fara":
        console.log(chalk.bgGray(`\n ${username.friend} is a friend`));
        break;
    default:
        console.log(chalk.bgGray(`\n ${username.friend} is not a friend`));
}
// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.
console.log(" \n \n \t\t Question number 4 \n\n");
let firstVar = 25;
let secondVar = 45;
function callVariables(...variables) {
    return variables;
}
;
console.log(callVariables(firstVar, secondVar));
console.log(callVariables(firstVar, secondVar, 25, 35));
// 5.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.
console.log(" \n \n \t\t Question number 5 \n\n");
let firstNumber = 20;
let secondNumber = 50;
let operators = "+" || "-";
function calaulator(num1 = firstNumber, num2 = secondNumber, operator = operators) {
    if (operator === "+") {
        console.log(`${num1} + ${num2} = `, num1 + num2);
    }
    else if (operator === "-") {
        console.log(`${num1} - ${num2} = `, num1 - num2);
    }
    else {
        console.log(chalk.red("invalid opeator"));
    }
}
calaulator(firstNumber, secondNumber, "+");
calaulator(firstNumber, secondNumber, "-");
calaulator(firstNumber, secondNumber, "*");
calaulator(4, 5, "+");
// 6.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration
console.log(" \n \n \t\t Question number 6 \n\n");
let anonynousFunction = (name) => { console.log(chalk.bgBlueBright(`My name is ${name}`)); };
anonynousFunction("xyz");
function anonynous(name) {
    console.log(chalk.bgGray(`My name is ${name}`));
}
;
anonynous("Asad");
