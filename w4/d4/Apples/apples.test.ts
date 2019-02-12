import { test } from 'tape';
import { Fruit } from './apples';

/*  test('get apple', t => {
  const myObject = new Fruit();

  let actual: string = myObject.getApple();
  let expected: string = 'apple'; 

  t.equal(actual,expected);
  t.end();
}) */

test('test apple', t => {
  const myObject: Fruit = new Fruit;

  t.equal(myObject.getApple(), 'apple');
  t.end();
});