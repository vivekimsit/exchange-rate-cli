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
  if (cli.input.length < 2) {
    throw new Error('You need to specify both source and target currencies');
  }
  const [source, target] = cli.input;
  try {
    const exchange = createExchange({
      requestApi: {
        async fetch() {
          return Promise.resolve({
            body: {
              'INR': 80 
            }
          });
        }
      }, 
      parser: {
        parse(data) {
          return { ...data };
        }
      },
      options: {
        enableCache: false
      }
    });
    const { rate } = await exchange.convert({source, target});
    console.log(rate);
  } catch (e) {
    if (e instanceof createExchange.CurrencyException) {
      console.error(e.message);
    } else {
      throw e;
    }
  }
}

run();
