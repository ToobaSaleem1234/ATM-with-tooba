#! /usr/bin/env node
import inquirer from "inquirer";
//Initialize user balance and pin code:
let myBalance = 50000;
let myPin = 12345;
//Print welcome message:
console.log("Welcome, to code with Tooba - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct,Login Successfully!");
    console.log(`Current Account Balance is ${myBalance}`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select your operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else
            (myBalance -= amountAns.amount);
        console.log(`${amountAns.amount}, Withdraw successfully`);
        console.log(`Your remaining Balance is: ${myBalance}`);
    }
    else if (operationAnswer.operation === "Check Balance")
        console.log(`Your Account Balance is:${myBalance}`);
}
else {
    console.log("Your pin is incorrect,Try Again!");
}
