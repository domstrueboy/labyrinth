const MAX_COMMANDS_LEN = 1000;

export default function runner(arr) {
  const len = arr.length;
  const newArr = [];
  let index = 0;
  while (index < len && index < MAX_COMMANDS_LEN) {
    const cur = arr[index];
    if (Array.isArray(cur)) {
      const command = cur[0];
      const times = cur[1];
      if (command === 'repeat') {
        const buf = [];
        
      }
      for (let i = 0; i < times; i++) {
        newArr.push(command);
      }
    }
    index++;
  }
  return newArr;
}