const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')

const sampleInput = fs
	.readFileSync(path.join(__dirname, 'sampleInput.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')

module.exports = {
	input, sampleInput
};