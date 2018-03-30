const functional = require('../templates/components/functional');
const stateful = require('../templates/components/stateful');

const types = {
  functional: 'Functional Component',
  stateful: 'Stateful Component',
};

const getTemplate = ({ name, template }) => {
  switch (template) {
    case types.functional:
      return functional(name);
    case types.stateful:
      return stateful(name);
  }
}

module.exports = {
  types,
  getTemplate,
};