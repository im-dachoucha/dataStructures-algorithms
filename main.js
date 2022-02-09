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

  //   done add at end
  addAtEnd(node) {
    if (!this.head) {
      this.head = node
    } else {
      let n = this.head
      while (n.next) n = n.next
      n.next = node
    }
  }

  //   done add at first
  addAtFirst(node) {
    if (!this.head) this.head = node
    else {
      node.next = this.head
      this.head = node
    }
  }
  //   todo add at

  //   todo remove at

  //   done size
  size() {
    let count = 0
    let n = this.head
    while (n) {
      count++
      n = n.next
    }
    return count
  }

  //   done is empty
  isEmpty() {
    return !this.head
  }
  //   done get last
  getLast() {
    let n = this.head
    while (n.next) {
      n = n.next
    }
    return n
  }

  //   done get first
  getFirst() {
    return this.head
  }

  //   done get at
  getAt(idx) {
    let count = 0
    let n = this.head
    while (n && count <= idx) {
      if (count === idx) return n
      n = n.next
      count++
    }
  }

  //   todo reverse

  //   done clear
  clear() {
    this.head = null
  }

  //   todo search

  //   todo sort

  //   todo replace at

  //   todo index of

  //   done print list
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
// let n6 = new Node(6)

let list = new List()

list.addAtEnd(n1)
list.addAtEnd(n2)
list.addAtEnd(n3)
list.addAtEnd(n4)
list.addAtEnd(n5)
// list.addAtFirst(n6)

list.printList()
console.log(list.getAt(10))

// console.log(list.isEmpty())

// console.log(list.size())

// console.log(list.getFirst())

// console.log(list.getLast())

// console.log(list.isEmpty())
// list.clear()
// console.log(list.isEmpty())

// todo provide value instead of node
