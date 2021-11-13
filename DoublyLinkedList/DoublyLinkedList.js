class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    if (data === undefined) {
      return;
    }

    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
}

let list = new DoublyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');

console.log(list);
console.log(list.head);
console.log(list.tail);
