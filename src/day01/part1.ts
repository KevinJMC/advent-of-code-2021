// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const inputArray: Array<number> = input.split('\n').map(n => Number(n))
  let numberOfIncreases = 0
  for(let index = 1; index < inputArray.length; index++) {
    if(inputArray[index]>inputArray[index-1]) numberOfIncreases++
  }

  return numberOfIncreases;
}
