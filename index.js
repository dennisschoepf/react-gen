#!/usr/bin/env node
const chalk = require('chalk');
const inquirer = require('inquirer');
const commander = require('commander');

const questions = require('./lib/questions');
const generate = require('./lib/generate');

console.log(`Welcome to ${chalk.bgWhite.blue(' react-gen ')}`);

// 1. Gather user input for templating react components
inquirer.prompt(questions)
  .then(input => {
    // 2. Generate components from input
    generate(input);
  })