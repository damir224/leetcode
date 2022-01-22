const canVisitAllRooms = function (rooms) {
  const visited = {};
  return dfs(rooms, 0, visited);
};
const dfs = (rooms, index, visited) => {
  if (visited[index]) {
    return true;
  } else {
    visited[index] = true;
  }
  for (let roomKey = 0; roomKey < rooms[index].length; roomKey++) {
    dfs(rooms, rooms[index][roomKey], visited);
  }
  return Object.keys(visited).length === rooms.length;
};

console.log(`canVisitAllRooms([[1], [2], [3], []])`, canVisitAllRooms([[1], [2], [3], []])) // true
console.log(`canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])`, canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])) // false


