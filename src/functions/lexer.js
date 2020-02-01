export default function lexer(arr) {
  return arr.reduce(
    (acc, cur) => {
      const line = cur.split(' ').filter(el => el !== '');
      const command = line[0].toLowerCase();
      const times = parseInt(line[1], 10);
      if (isNaN(times)) return acc;
      if (['влево', 'left'].includes(command)) {
        acc.push(['left', times]);
      } else if (['вправо', 'right'].includes(command)) {
        acc.push(['right', times]);
      } else if (['вверх', 'up'].includes(command)) {
        acc.push(['up', times]);
      } else if (['вниз', 'down'].includes(command)) {
        acc.push(['down', times]);
      }
      return acc;
    },
    []
  );
}