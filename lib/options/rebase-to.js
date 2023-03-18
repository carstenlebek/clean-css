var path = require('path');
var process = require('process');

function rebaseToFrom(option) {
  return option ? path.resolve(option) : process.cwd();
}

module.exports = rebaseToFrom;
