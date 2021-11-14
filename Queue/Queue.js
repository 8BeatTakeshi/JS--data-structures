class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    if (data === undefined) {
      return;
    }

    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    // this.size++;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }

    let removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return removedNode.data;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue);
let a = queue.dequeue();
let b = queue.dequeue();
let c = queue.dequeue();
let d = queue.dequeue();
let e = queue.dequeue();
console.log(a, b, c, d, e);
console.log(queue);
