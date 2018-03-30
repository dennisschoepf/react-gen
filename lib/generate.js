const mock = require('../templates/mock');
const stories = require('../templates/stories');
const test = require('../templates/test');
// Util
const { getTemplate } = require('./templates');

const generate = ({ name, template }) => {
  const config = {
    template: getTemplate({ name, template }),
    mock: mock(),
    stories: stories(name),
    test: test(name),
  };

  console.log(JSON.stringify(config));
};

module.exports = generate;