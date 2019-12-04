const input = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,6,23,27,1,5,27,31,1,10,31,35,2,10,35,39,1,39,5,43,2,43,6,47,2,9,47,51,1,51,5,55,1,5,55,59,2,10,59,63,1,5,63,67,1,67,10,71,2,6,71,75,2,6,75,79,1,5,79,83,2,6,83,87,2,13,87,91,1,91,6,95,2,13,95,99,1,99,5,103,2,103,10,107,1,9,107,111,1,111,6,115,1,115,2,119,1,119,10,0,99,2,14,0,0';

const processCode = (inArr = [], pos = 0) => {
  const arr = [...inArr];
  const code = arr[pos];
  const aPos = arr[pos + 1];
  const bPos = arr[pos + 2];
  const outputPos = arr[pos + 3];

  if (code === 99) return arr;

  const a = arr[aPos];
  const b = arr[bPos];

  const newVal = (code === 1) ? a + b : a * b;

  arr[outputPos] = newVal;

  return processCode(arr, pos + 4);

}

const bruteForceFind = (inArr) => {
  const arr = [...inArr];
  for (let i = 99; i--;) {
    arr[1] = i;
    for (let j = 99; j--;) {
      arr[2] = j;
      const output = processCode(arr)[0];
      if (output === 19690720) return [i, j];
    }
  }
}

const inputArr = input.split(',').map(Number);

const [noun, verb] = bruteForceFind(inputArr);

// const finalStr = `${100* noun}${verb}`;

console.log(100 * noun + verb);