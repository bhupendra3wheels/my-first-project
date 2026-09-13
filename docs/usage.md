# Usage Guide

## Installation
npm install

## Examples

### Greeting
const { greet } = require('./src/index');
console.log(greet('Bhupendra'));

### Date formatting
const { formatDate } = require('./utils/helpers');
console.log(formatDate(new Date()));
