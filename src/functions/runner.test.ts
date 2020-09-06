import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import runner from './runner.js';

Deno.test('Runner', () => {

  const input = [
    ['repeat', 3],
    ['up', 1],
    ['right', 2],
    'delimeter',
    ['left', 1],
    'delimeter',
    ['repeat', 2],
    ['down', 2],
  ];
  
  const output = ['up', 'right', 'right', 'up', 'right', 'right', 'up', 'right', 'right', 'left', 'down', 'down', 'down', 'down'];
  
  const result = runner(input);

  assertEquals(result, output);
});
