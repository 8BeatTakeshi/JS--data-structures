class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(data) {
    if (data === undefined) {
      return;
    }

    let newNode = new Node(data);
    if (!this.last) {
      this.last = newNode;
    } else {
      newNode.prev = this.last;
      this.last = newNode;
    }

    // this.size++;
    return ++this.size;
  }

  pop() {
    if (!this.last) {
      return undefined;
    }

    let last = this.last;
    this.last = last.prev;
    this.size--;

    return last.data;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
let item = stack.pop();
console.log(item);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
