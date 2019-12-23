// Mrm module to work with new line separated text files
const {
  // JSON files
  json,
  // package.json
  packageJson,
  // New line separated text files
  lines,
  // Install npm packages
  install
} = require('mrm-core');

function task() {
   const file = json('./package.json');
   file.exists()
   file.merge({
	"compileEnhancements": false,
		"extensions": [
			"ts"
		],
		"require": [
			"ts-node/register"
		],
		files: ["src/**/*.spec.ts "]
	})
   file.save();
}

task.description = 'Adds ava config';
module.exports = task;