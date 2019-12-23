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
   install('ts-node')
   install('esm')
   install('@babel/register')
   install('@babel/core')
   install('@babel/polyfill')
   install('@ava/babel-preset-stage-4')
   install('tsconfig-paths')
   install('typescript')
   const pkg = packageJson()
    .setScript('test', 'ava')
    .setScript('test:watch', 'ava --watch')
    .save()
   file.merge({
       "ava": {
          "compileEnhancements": false,
          "extensions": [ "ts"],
          "require": [
            "esm",
            "ts-node/register",
            "tsconfig-paths/register",
            "@babel/register",
            "@babel/polyfill",
          ],
          "babel": {
          "testOptions": {
            "plugins": [
              "@babel/plugin-syntax-jsx"
            ],
            "presets": [
              "module:ava/stage-4",
              {
                "modules": false
              }
            ],
            "extensions": [
              "ts"
            ]
          }
        },
          "files": ["src/**/*.spec.ts "]
        }
      })
   file.save();
}

task.description = 'Adds ava config';
module.exports = task;