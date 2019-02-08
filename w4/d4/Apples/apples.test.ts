import { test } from 'tape';
import { Fruit } from './apples';

 test('get apple', t => {
  const operations = new Fruit();

  let actual: string = operations.getApple();
  let expected: string = 'apple'; 

  t.deepEqual(actual,expected);
  t.end();
})