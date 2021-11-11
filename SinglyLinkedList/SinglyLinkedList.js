class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (!val) {
      throw new Error('The push method expects a value in argument');
    }
    // console.log(this.head, this.tail, this.length);

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // console.log(this.head, this.tail, this.length);

    return this;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
console.log(list.head.next);
