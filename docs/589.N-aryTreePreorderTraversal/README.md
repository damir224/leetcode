ссылка на задачу 

https://leetcode.com/problems/n-ary-tree-preorder-traversal/


---
```js
const dfs = (root, res) => {
    if(root === null) {
        return
    }
    res.push(root.val)
    let length = root.children.length-1, i=0;
    while(length>=0){
        dfs(root.children[i], res)
        i++
        length--
    }
}
const preorder = function(root) {
    const res = [];
    dfs(root, res)
    return res
};
```
---

