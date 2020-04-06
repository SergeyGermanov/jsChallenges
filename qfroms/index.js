// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    return this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;

// while loops solution
// class Queue {
//     constructor() {
//       this.one = new Stack();
//       this.two = new Stack();
//     }

//     add(record) {
//       return this.one.push(record);
//     }

//     remove() {
//       let result;

//       while (this.one.peek()) {
//         this.two.push(this.one.pop());
//       }
//       result = this.two.pop();
//       while (this.two.peek()) {
//         this.one.push(this.two.pop());
//       }
//       return result;
//     }

//     peek() {
//       let result;
//       while (this.one.peek()) {
//         this.two.push(this.one.pop());
//       }
//       result = this.two.peek();
//       while (this.two.peek()) {
//         this.one.push(this.two.pop());
//       }
//       return result;
//     }
//   }
