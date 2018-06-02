#!/usr/bin/env node
'use strict';

const createExchange = require('node-exchange-rate');
const meow = require('meow');

const cli = meow(`
  Usage
    $ exchange-rate-cli <source> <target>
  Examples
    $ exchange-rate-cli EUR GBP
`);

async function run() {
  const source = cli.input[0];
  const target = cli.input[1];
  const exchange = createExchange();
  const {rate} = await exchange.convert({source, target});
  console.log(rate);
}

run();
