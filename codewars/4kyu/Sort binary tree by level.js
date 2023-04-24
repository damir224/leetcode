function treeByLevels (rootNode) {
  if (rootNode === null) return [];
  const stack = [rootNode]
  const result = []
  while(stack.length) {
    const currentNode = stack.shift()
    result.push(currentNode.value)
    if(currentNode.left) stack.push(currentNode.left)
    if(currentNode.right) stack.push(currentNode.right)
  }
	return result;
}
