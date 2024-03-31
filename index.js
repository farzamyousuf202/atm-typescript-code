#! /usr/bin/env node
import inquirer from "inquirer";
let my_balance = 200000;
let my_pin = 67895;
let pin_check = await inquirer.prompt([
    { message: "Enter Your pin", type: "number", name: "pin" },
]);
if (pin_check.pin == my_pin) {
    let operation = await inquirer.prompt([
        { message: "Select any one", type: "list", name: "list", choices: ["withdraw", "check balance"] },
    ]);
    if (operation.list === "withdraw") {
        let amount = await inquirer.prompt([
            { message: "Enter Your account", type: "number", name: "amount" },
        ]);
        if (amount.amount <= my_balance && amount.amount >= 500) {
            my_balance -= amount.amount;
            console.log("your remaining balance is" + my_balance);
        }
        else {
            console.log("invalid amount");
        }
    }
    else if (operation.list === "check balance") {
        console.log("your balance is" + my_balance);
    }
}
else {
    console.log("invalid pin");
}
