// Advent of Code - Day 3 - Part Two

export const getIntFromBinary = (val: string) : number => {
  return parseInt(val, 2)
}

export const filterByMostCommon = (arr: Array<string>) => {
  let index = 0
  let filteredArray = arr;
  while (filteredArray.length > 1) {
    const charAtIndexArray = filteredArray.map(item => item[index])
    const ones = charAtIndexArray.filter(num => num === '1')

    if(ones.length >= (charAtIndexArray.length / 2)) {
      filteredArray = filteredArray.filter((binaryNum) => binaryNum[index] === '1')
    } else {
      filteredArray = filteredArray.filter((binaryNum) => binaryNum[index] === '0')
    }
    index++
  }
  return filteredArray[0]
}

export const filterByLeastCommon = (arr: Array<string>) => {
  let index = 0
  let filteredArray = arr;
  while (filteredArray.length > 1) {
    const charAtIndexArray = filteredArray.map(item => item[index])
    const zeros = charAtIndexArray.filter(num => num === '1')

    if(zeros.length >= (charAtIndexArray.length / 2)) {
      filteredArray = filteredArray.filter((binaryNum) => binaryNum[index] === '0')
    } else {
      filteredArray = filteredArray.filter((binaryNum) => binaryNum[index] === '1')
    }
    index++
  }
  return filteredArray[0]
}

export function part2(input: string): number {
  const inputArray = input.split('\n');
  const o2 = filterByMostCommon(inputArray);
  const co2 = filterByLeastCommon(inputArray);
  return getIntFromBinary(o2) * getIntFromBinary(co2);
}
