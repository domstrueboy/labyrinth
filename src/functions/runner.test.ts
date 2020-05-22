import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import runner from './runner.js';

Deno.test('Runner', () => {

  const input = [
    ['repeat', 5],
    ['up', 1],
    'delimeter',
    ['up', 1],
    'delimeter',
  ];
  
  const output = ['up', 'up', 'up', 'up', 'up', 'up'];
  
  const result = runner(input);

  assertEquals(result, output);
});
