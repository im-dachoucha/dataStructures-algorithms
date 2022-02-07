class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class List {
  constructor(node) {
    this.head = node
  }

  addToEnd(node) {
    if (!this.head) {
      this.head = node
    } else {
      let n = this.head
      while (n.next !== null) n = n.next
      n.next = node
    }
  }

  addAtFirst(node) {
    if (!this.head) this.head = node
    else {
      node.next = this.head
      this.head = node
    }
  }

  printList() {
    let n = this.head
    while (n) {
      console.log(n.value)
      n = n.next
    }
  }
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)
let n6 = new Node(6)
