import test from 'ava';
import execa from 'execa';

test('node-exchange-rate', async t => {
  t.regex(await execa.stdout('./cli.js', ['EUR', 'INR']), /^\d+\.\d{0,4}$/);
});
