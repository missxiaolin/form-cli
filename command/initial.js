const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

function copyCocoConfigJS() {
    figlet('coco cli', function (err, data) {
        if (err) {
            console.log(chalk.red('Some thing about figlet is wrong!'));
        }
        console.log(chalk.yellow(data));
        let targetFilePath = path.resolve('coco.config.js');
        let templatePath = path.join(__dirname, '../tpl/coco.config.js');
        let contents = fs.readFileSync(templatePath, 'utf8');
        fs.writeFileSync(targetFilePath, contents, 'utf8');
        console.log(chalk.green('初始化配置成功 \n'));
        process.exit(0);
    });
}