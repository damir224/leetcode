const getTreeByLevels = (root) => {
    const queue = [root];
    const result = []
    
    while (queue.length !== 0) {
      const currentLevelNodesAmount = queue.length 
      result.push([])
      for (let i = 0; i < currentLevelNodesAmount; i++) {
        const frontQueueNode = queue.shift()
        if(frontQueueNode.left) {
          queue.push(frontQueueNode.left)
        }
        if(frontQueueNode.right) {
          queue.push(frontQueueNode.right)
        }
        result[result.length-1].push(frontQueueNode.value)
      }
    }

    return result;
};

function Node( value = null, left = null, right = null) {
    return {
        value,
        left,
        right,
    };
}
const tree = new Node(7);
tree.left = new Node(3)
tree.right = new Node(8)
tree.left.right = new Node(5)
tree.left.right.left = new Node(4)
tree.left.right.right = new Node(6)

console.log('getTreeByLevels(tree)', getTreeByLevels(tree));
