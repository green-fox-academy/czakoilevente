'use strict';

import { MyClass } from  './myClass';

const test = require('tape');

test('sum numbers in the array', t => {
  const operation = new MyClass;

  let actual: number = operation.sum([1,2,3,4,5]);
  let expected: number = 15;

  t.equal(actual,expected);
  t.end();
});
