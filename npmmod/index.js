import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.yellow('Hello world!'));

// Combine styled and normal strings
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

const validemailornot=validator.isEmail("snehamondalgmail.com");
console.log(validemailornot);