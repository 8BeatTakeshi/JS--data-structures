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

  ////////// RECURSIVE INSERT AND FIND METHOD //////////

  insert(data, current = this.root) {
    if (data === undefined) return undefined;

    let newNode = new Node(data);

    if (!current) {
      this.root = newNode;
      return this;
    }
    if (current.data === data) return false;

    const direction = current.data > data ? 'left' : 'right';
    if (!current[direction]) {
      current[direction] = newNode;
      return this;
    } else {
      return this.insert(data, current[direction]);
    }
  }

  find(data, current = this.root) {
    if (data === undefined) return undefined;
    if (!current) return false;

    if (data === current.data) return current; // or true
    return current.data > data
      ? this.find(data, current.left)
      : this.find(data, current.right);
  }

  ////////// ITERATIVE INSERT AND FIND METHOD //////////

  // insert(data) {
  //   if (data === undefined) {
  //     return undefined;
  //   }

  //   let newNode = new Node(data);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }

  //   let current;
  //   let next = this.root;
  //   let direction;

  //   do {
  //     current = next;
  //     if (current.data === data) {
  //       return undefined;
  //     }

  //     direction = current.data > data ? 'left' : 'right';
  //     next = current[direction];
  //   } while (next);

  //   current[direction] = newNode;

  //   return this;
  // }

  // find(data) {
  //   if (data === undefined) {
  //     return undefined;
  //   }
  //   if (!this.root) {
  //     return false;
  //   }

  //   let current;
  //   let next = this.root;
  //   let direction;

  //   do {
  //     current = next;
  //     if (current.data === data) {
  //       return current; // or return true
  //     }
  //     direction = current.data > data ? 'left' : 'right';
  //     next = current[direction];
  //   } while (next);

  //   return false;
  // }
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
console.log(tree.find(37));
