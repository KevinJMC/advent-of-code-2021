// Advent of Code - Day 3 - Part One

export const getDecimalFromBinary = (binaryNum:  number): number => {
  let result = 0;
  let bit = 0;
  const num = binaryNum.toString();
  let n = num.length - 1;

  while(n >= 0) {
    if(num.charAt(n) == '1') {
      result += (1 << (bit));
    }
    n = n - 1;
    bit++;
  }
  return result;
}

const zipSumReturnBinaryFromArray = (arr: Array<Array<number>>): string => {
  const combinedArr = arr[0].map((col, idx) => {
    return arr.map((row) => row[idx]).reduce((a,b) => a + b)
  });
  const result = combinedArr.map((char) => Number(char) > 0 ? '1' : '0').join('');
  return result;
}

export const getGamma = (inputArray: Array<string>): number => {
  const arrOfMostCommonCharInPosition: Array<number> = new Array<number>(inputArray[0].length).fill(0);
  const mostCommonChars = inputArray.map((val) => {
    for(let i = 0; i<val.length; i++) {
      val.charAt(i) == '1' ?  arrOfMostCommonCharInPosition[i]++ : arrOfMostCommonCharInPosition[i]--;
    }
    return arrOfMostCommonCharInPosition;
  });
  const binaryString = zipSumReturnBinaryFromArray(mostCommonChars);
  return getDecimalFromBinary(Number(binaryString));
}

export const getEpsilon = (inputArray: Array<string>): number => {
  const arrOfLeastCommonCharInPosition: Array<number> = new Array<number>(inputArray[0].length).fill(0);
  const leastCommonChars = inputArray.map((val) => {
    for(let i = 0; i<val.length; i++) {
      val.charAt(i) == '1' ?  arrOfLeastCommonCharInPosition[i]-- : arrOfLeastCommonCharInPosition[i]++;
    }
    return arrOfLeastCommonCharInPosition;
  });
  const binaryString = zipSumReturnBinaryFromArray(leastCommonChars);
  return getDecimalFromBinary(Number(binaryString));
}

export function part1(input: string): number {
  const inputArray = input.split('\n');

  const gamma = getGamma(inputArray);
  const epsilon = getEpsilon(inputArray);

  return gamma*epsilon;
}
