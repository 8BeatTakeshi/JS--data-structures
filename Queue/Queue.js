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
}

let queue = new Queue();
let a = queue.enqueue(1);
let b = queue.enqueue(2);
let c = queue.enqueue(3);
let d = queue.enqueue(4);
let e = queue.enqueue(5);
console.log(a, b, c, d, e);
console.log(queue);
