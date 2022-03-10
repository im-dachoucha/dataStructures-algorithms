class node {
  constructor(value) {
    this.value = value
    this.adjacents = []
  }

  //   isAdjacent = (node) => this.adjacents.indexOf(node) > -1;
  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1
  }

  addAdjacent = (node) => {
    if (!this.isAdjacent(node)) this.adjacents.push(node)
  }

  removeAdjacent = (node) => {
    const idx = this.adjacents.indexOf(node)
    if (idx > -1) {
      this.adjacents.splice(idx, 1)
      return node
    }
  }

  getAdjacents = () => this.adjacents
}

const n1 = new node(1)
const n2 = new node(2)
const n3 = new node(3)
const n4 = new node(4)

n1.addAdjacent(n2)
n1.addAdjacent(n3)

n1.getAdjacents().forEach((adjacent) => {
  console.log(adjacent.value)
})

console.log(n1.isAdjacent(n3))

n1.removeAdjacent(n3)

console.log(n1.isAdjacent(n3))
