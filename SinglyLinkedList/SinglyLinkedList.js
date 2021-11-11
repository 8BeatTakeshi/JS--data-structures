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
      return;
    }
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    removedHead.next = null;
    return removedHead;
  }

  unshift(val) {
    if (!val) {
      return;
    }

    let newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
}

let list = new SinglyLinkedList();
list.unshift('1');
list.unshift('2');
list.unshift('3');
list.unshift('4');
list.unshift('5');
console.log(list);
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// console.log(list);
