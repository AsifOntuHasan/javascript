class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this._insertRecursive(this.root, value);
    }
  }
  _insertRecursive(node, value) {
    if (value < node.value) {
      if (node.left === null) node.left = new Node(value);
      else this._insertRecursive(node.left, value);
    } else if (value > node.value) {
      if (node.right === null) node.right = new Node(value);
      else this._insertRecursive(node.right, value);
    }
  }
}
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
