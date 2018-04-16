const mkdirp = require('mkdirp');
const fs = require('fs-extra');

const capitalize = input => input.charAt(0).toUpperCase() + input.slice(1);

const createFile = (name, template, suffix, callback) => {
  return new Promise((resolve, reject) => {
    fs.outputFile(`${name}/${name}${suffix && `.${suffix}`}.js`, template, (error) => {
      if (error) return reject(error);
      return resolve();
    });
  });
};

module.exports = {
  capitalize,
  createFile,
};