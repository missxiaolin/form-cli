const path = require('path')
const fs = require('fs')
const program = require('commander');
const initial = require('../command/initial');
const generate = require('../command/generator');
const release = require('../command/release');

const pkg = require('../package.json')


let config = {};
// 配置文件如果存在则读取
if (fs.existsSync(path.resolve('form.config.js'))) {
  config = require(path.resolve('form.config.js'));
}

program
  .version(pkg.version, '-v, --version')
  .command('init')
  .description('初始化 coco config 配置文件')
  .action(initial);

program
  .command('create [template]')
  .description('生成 coco 模板')
  .action(function (template) {
    generate(template);
  });

program
  .command('release')
  .description('发布模板')
  .action(function () {
    release();
  });