export default function checkIfInField(grid, x, y) {
  if (x < 0 || y < 0) return false;
  if (x >= grid[0].length || y >= grid.length) return false;
  if (grid[y][x] === 0) return false;
  return true;
}