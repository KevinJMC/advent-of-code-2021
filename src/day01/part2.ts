// Advent of Code - Day 1 - Part Two

export function part2(input: string): number {
  const inputArray: Array<number> = input.split('\n').map(n => Number(n))
  let numberOfIncreases = 0
  for(let index = 3; index < inputArray.length; index++) {
    if(inputArray[index]>inputArray[index-3]) numberOfIncreases++
  }

  return numberOfIncreases;}
