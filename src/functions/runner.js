const MAX_COMMANDS_LEN = 1000;
const newArr = [];

export default function runner(arr) {
  console.log('arr', arr);
  const len = arr.length;
  
  let index = 0;
  while (index < len && index < MAX_COMMANDS_LEN) {
    const cur = arr[index];
    const command = cur[0];
    const times = cur[1];
    if (command === 'repeat') {
      const block = [];
      let blockIndex = index + 1;
      while (arr[blockIndex] !== 'delimeter' && blockIndex < len && blockIndex < MAX_COMMANDS_LEN) {
        block.push(arr[blockIndex]);
        blockIndex++;
      }
      index = blockIndex;
      for (let i = 0; i < times; i++) runner(block);
    } else {
      for (let i = 0; i < times; i++) {
        newArr.push(command);
      }
    }
    index++;
  }
  return newArr;
}
