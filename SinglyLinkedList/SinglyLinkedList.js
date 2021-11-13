class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
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

    let removedNode = this.head;
    this.head = removedNode.next;
    removedNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode;
  }

  unshift(data) {
    if (data === undefined) {
      return;
    }

    let newNode = new Node(data);

    if (!this.head) {
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index === undefined || index < 0 || index > this.length - 1) {
      return null;
    }

    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(data, index) {
    if (data === undefined || index === undefined) {
      return;
    }

    let foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }

    foundNode.data = data;
    return true;
  }

  insert(data, index) {
    if (data === undefined || index === undefined) {
      return;
    }
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      // !! === convert value to Boolean
      return !!this.push(data);
    }
    if (index === 0) {
      return !!this.unshift(data);
    }

    let newNode = new Node(data);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index === undefined || index < 0 || index > this.length - 1) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prev = this.get(index - 1);
      let removedNode = prev.next;
      prev.next = removedNode.next;
      removedNode.next = null;
      this.length--;

      return removedNode;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let current = this.head;

    let count = 0;
    console.log('\n*=*=*= SINGLY LINKED LIST  =*=*=*');
    while (count < this.length) {
      if (count === 0) {
        console.log(`${count} - Node(${current.data}) - HEAD`);
      } else if (count === this.length - 1) {
        console.log(`${count} - Node(${current.data}) - TAIL`);
      } else {
        console.log(`${count} - Node(${current.data})`);
      }
      current = current.next;
      count++;
    }
  }
}

let list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
let oldTail = list.remove(3);
console.log(oldTail);
// list.print();
// list.reverse();
// list.print();
