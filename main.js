// Import necessary modules
import inquirer from "inquirer";
import chalk from "chalk";
// Define the Person class
class Person {
    _personality;
    constructor() {
        // Set default personality to "Mystery"
        this._personality = "Mystery";
    }
    // Method to process user input and set personality accordingly
    userInput(input) {
        // Check if the input matches specific strings and set personality
        if (input.includes("talk to others about my self")) {
            this._personality = "talk happily";
        }
        else if (input.includes("keep quite and don't ask question")) {
            this._personality = "talk rudely";
        }
    }
    // Getter to access the personality
    get personality() {
        return this._personality;
    }
}
// Define the Main class to handle user interaction
class Main {
    async main() {
        // Prompt the user with a question
        const ans = await inquirer.prompt({
            type: "list",
            name: "choice",
            message: chalk.yellow("Tell your behaviors:"),
            choices: [
                "talk to others about my self",
                "keep quite and don't ask question",
            ],
        });
        // Create an instance of the Person class
        let myPerson = new Person();
        // Process the user's choice to determine personality
        myPerson.userInput(ans.choice);
        // Output the resulting personality
        console.log(`You are ${myPerson.personality}`);
    }
}
// Create an instance of the Main class and run the main method
const myObject = new Main();
myObject.main();
