const mkdirp = require('mkdirp');
const fs = require('fs-extra');

const capitalize = input => input.charAt(0).toUpperCase() + input.slice(1);

const createFile = (name, template, suffix, callback) => {
  fs.outputFile(`${name}/${name}${suffix && `.${suffix}`}.js`, template, callback);
};

module.exports = {
  capitalize,
  createFile,
};