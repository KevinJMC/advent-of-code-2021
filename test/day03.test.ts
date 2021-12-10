// Advent of Code - Day 3

import { part1, part2 } from '../src/day03';
import { getDecimalFromBinary, getGamma, getEpsilon } from '../src/day03/part1';

const getMockData = () => {
  const testData = '00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010'
  
  return testData.split('\n'); 
}

test('getDecimalFromBinary test', () => {
  expect(getDecimalFromBinary(11011)).toBe(27);
})

test('getGamma test', () => {
  expect(getGamma(getMockData())).toBe(22)
})

test('getEpsilon test', () => {
  expect(getEpsilon(getMockData())).toBe(9)
})

test('part one test', () => {
  const mockData = getMockData().join('\n');
  expect(part1(mockData)).toBe(198);
});

xtest('part two test', () => {
  expect(part2("")).toBe(0);
});
