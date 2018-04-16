const mock = require('../templates/mock');
const stories = require('../templates/stories');
const test = require('../templates/test');
const { getTemplate } = require('./templates');
const {
  capitalize,
  createDirectory,
  createFile,
} = require('./util.js');

const generate = async ({ name, template }) => {
  const config = {
    name: capitalize(name),
    template: getTemplate({ name, template }),
    mock: mock(),
    stories: stories(name),
    test: test(name),
  };

  Promise.all([
    createFile(config.name, config.template, ''),
    createFile(config.name, config.mock, 'mock'),
    createFile(config.name, config.stories, 'stories'),
    createFile(config.name, config.test, 'test'),
  ]);

  console.log(`Component ${name} generated.`);
};

module.exports = generate;