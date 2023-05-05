#!/user/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

console.log(chalk.bgYellow('hey'));

let name;
//js doesnt implement a promise based timeout
const sleep=(ms = 2000) =>new Promise((r)=> setTimeout(r,ms));