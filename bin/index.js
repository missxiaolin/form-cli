const path = require('path')
const fs = require('fs')
const program = require('commander');

const pkg = require('../package.json')


let config = {};
// 配置文件如果存在则读取
if (fs.existsSync(path.resolve('form.config.js'))) {
    config = require(path.resolve('form.config.js'));
}