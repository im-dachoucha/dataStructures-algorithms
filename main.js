class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class List {
  constructor(value) {
    let node = new Node(value)
    this.head = node
  }

  //   done add at end
  addAtEnd(value) {
    let node = new Node(value)
    if (!this.head) {
      this.head = node
    } else {
      let n = this.head
      while (n.next) n = n.next
      n.next = node
    }
  }

  //   done add at first
  addAtFirst(value) {
    let node = new Node(value)
    if (!this.head) this.head = node
    else {
      node.next = this.head
      this.head = node
    }
  }

  //   done add at
  addAt(value, idx) {
    if (idx < 0) {
      console.log("idx should highier than 0")
      return
    }

    let node = new Node(value)

    if (idx == 0) {
      node.next = this.head
      this.head = node
      return
    }

    let pos = 0
    let n = this.head
    while (n.next && pos + 1 < idx) {
      n = n.next
      pos++
    }
    node.next = n.next
    n.next = node
  }

  //   done remove at
  removeAt(idx) {
    if (!this.head) return

    if (idx === 0) {
      this.head = this.head.next
    }

    let pos = 0
    let n = this.head
    while (n.next && pos < idx) {
      if (pos + 1 === idx) {
        n.next = n.next.next
        return
      }
      n = n.next
      pos++
    }
  }

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

// let n1 = new Node(1)
// let n2 = new Node(2)
// let n3 = new Node(3)
// let n4 = new Node(4)
// let n5 = new Node(5)
// let n6 = new Node(6)

let list = new List(0)

list.addAtEnd(1)
list.addAtEnd(2)
list.addAtEnd(3)
list.addAtEnd(4)
list.addAtEnd(5)

// list.addAtFirst(6)

// console.log(list.getAt(10))

// console.log(list.isEmpty())

// console.log(list.size())

// console.log(list.getFirst())

// console.log(list.getLast())

// console.log(list.isEmpty())
// list.clear()
// console.log(list.isEmpty())

// list.removeAt(3)

// list.printList()
// list.addAt(-1, 2)
// console.log("-----------------")
// list.printList()

// done provide value instead of node
