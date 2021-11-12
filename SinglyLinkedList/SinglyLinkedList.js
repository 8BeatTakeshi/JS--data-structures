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
    if (val === undefined) {
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
    if (val === undefined) {
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

  set(val, index) {
    if (val === undefined || index === undefined) {
      return;
    }

    let foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }

    foundNode.val = val;
    return true;
  }

  insert(val, index) {
    if (val === undefined || index === undefined) {
      return;
    }
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      // !! === convert value to Boolean
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  print() {
    let current = this.head;

    let count = 0;
    console.log('*=*=*= SINGLY LINKED LIST  =*=*=*');
    while (count < this.length) {
      console.log(`${count} - Node(${current.val})`);
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
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
console.log(list);
list.insert('new value', 3);
list.print();
// console.log(list);
// let item = list.get(4);
// console.log(item);
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// console.log(list);
