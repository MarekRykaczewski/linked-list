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

    prepend(value) {
        let node = new Node(value, this.head.nextNode)
        let temp = this.head
        if (this.head) {
            this.head = node
        }
        this.head.nextNode = temp
    }

    size() {
        let pointer = this.head
        let size = 0
        while(pointer.nextNode !== null) {
            size++
            pointer = pointer.nextNode
        }
        return size
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
list.prepend("beforeone")
console.log(list)
console.log(list.size())

