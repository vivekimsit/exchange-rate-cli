#!/usr/bin/env node
'use strict';

//const exchange = require('exchange-rate');
const meow = require('meow');

const cli = meow(`
  Usage
    $ exchange-rate <source> <target>
  Examples
    $ cpy EUR GBP
`);

const [source, target, ..._] = cli.input;
console.log(source, target);
