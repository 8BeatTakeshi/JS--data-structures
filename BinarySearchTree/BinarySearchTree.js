class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (data === undefined) {
      return undefined;
    }

    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // let current = this.root;
    // while (true) {
    //   if (data === current.data) {
    //     return undefined;
    //   }
    //   if (data < current.data) {
    //     if (current.left === null) {
    //       current.left = newNode;
    //       return this;
    //     }
    //     current = current.left;
    //   } else if (data > current.data) {
    //     if (current.right === null) {
    //       current.right = newNode;
    //       return this;
    //     }
    //     current = current.right;
    //   }
    // }

    // a more understandable way
    let current;
    let next = this.root;
    let direction;

    do {
      current = next;
      if (current.data === data) {
        return undefined;
      }

      direction = current.data > data ? 'left' : 'right';
      next = current[direction];
    } while (next);

    current[direction] = newNode;

    return this;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(37);
tree.insert(23);
tree.insert(7);
tree.insert(79);

console.log(tree);
console.log(tree.insert(79));
