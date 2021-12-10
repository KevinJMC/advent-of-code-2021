// Advent of Code - Day 2 - Part Two

export function part2(input: string): number {
  const inputArray = input.split('\n');
  let [horizontalPos, vertPos] = [0, 0];
  let aim = 0;
  for(let index = 0; index < inputArray.length; index++) {
    const val = inputArray[index].split(' ');
    const [direction, distance] = val;
    if(direction.startsWith('f')) {
      horizontalPos += Number(distance);
      vertPos += aim * Number(distance);
    }
    if(direction.startsWith('b')) {
      horizontalPos -= Number(distance);
      vertPos -= aim * Number(distance);
    }
    if(direction.startsWith('d')) aim += Number(distance)
    if(direction.startsWith('u')) aim -= Number(distance)
  }
  return horizontalPos * vertPos
}
