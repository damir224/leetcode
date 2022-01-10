ссылка на задачу 

https://leetcode.com/problems/keys-and-rooms/


---

```js
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

```
