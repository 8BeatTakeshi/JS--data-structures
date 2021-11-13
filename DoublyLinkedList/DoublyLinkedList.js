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

  pop() {
    if (!this.head) {
      return undefined;
    }

    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;

    return removedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;

    return removedNode;
  }

  unshift(data) {
    if (data === undefined) {
      return;
    }

    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index === undefined || index < 0 || index > this.length - 1) {
      return null;
    }

    let current = this.head;
    let direction = 'next';

    // If it will start from the tail
    if (index > (this.length - 1) / 2) {
      console.log('START FROM THE TAIL');
      current = this.tail;
      direction = 'prev';
      index = this.length - 1 - index;
    }

    for (let i = 0; i < index; i++) current = current[direction];

    return current;
  }
}

let list = new DoublyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('6');
let item = list.get(2);
console.log(item);
// console.log(list.head);
// console.log(list.tail);
// let v = list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// console.log(v);
// console.log(list);
// console.log(list.head);
// console.log(list.tail);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
