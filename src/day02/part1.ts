// Advent of Code - Day 2 - Part One

export function part1(input: string): number {
  const inputArray = input.split('\n');
  let [horizontalPos, vertPos] = [0, 0];
  for(let index = 0; index < inputArray.length; index++) {
    const val = inputArray[index].split(' ');
    const [direction, distance] = val;
    if(direction.startsWith('f')) horizontalPos += Number(distance)
    if(direction.startsWith('d')) vertPos += Number(distance)
    if(direction.startsWith('b')) horizontalPos -= Number(distance)
    if(direction.startsWith('u')) vertPos -= Number(distance)
  }
  return horizontalPos * vertPos
}
