export default function lexer(arr) {
  return arr.reduce(
    (acc, cur) => {
      const command = cur.split(' ');
      acc.push(command);
      return acc;
    },
    []
  );
}