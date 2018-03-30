const { types } = require('./templates');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'How should your new component be called?',

  },
  {
    type: 'list',
    name: 'template',
    message: 'What kind of component do you want to generate?',
    choices: [
      'Functional Component',
      'Stateful Component',
    ],
  }
];

module.exports = questions;