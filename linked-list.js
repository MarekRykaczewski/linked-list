class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        let node = new Node(value, null)
        
        if (!this.head) {
            this.head = node
            return this.head
        } 
        let tail = this.head
        while(tail.nextNode !== null) {
            tail = tail.nextNode
        }
        tail.nextNode = node
        return this.head   
    }
}
    

class Node {
    constructor(value, nextNode) {
        this.value = value
        this.nextNode = nextNode
    }
}

const list = new LinkedList

// console.log(list)
list.append("one")
// console.log(list)
list.append("two")
// console.log(list)
list.append("three")
console.log(list)

