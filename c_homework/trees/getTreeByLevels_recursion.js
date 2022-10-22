const _getTreeByLevels = (node, level, result) => {
    if (node === null) return;

    if (!result[level]) result.push([]);
    result[level].push(node.value);
    _getTreeByLevels(node.left, level + 1, result);
    _getTreeByLevels(node.right, level + 1, result);
};

const getTreeByLevels = (root) => {
    const result = [];
    _getTreeByLevels(root, 0, result);

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
