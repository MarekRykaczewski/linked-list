class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        let node = new Node(value, null)
        
        if (!this.head) { // Set head to node 
            this.head = node
            return this.head
        } 
        let tail = this.head // tail is the pointer for the last value, start at head
        while(tail.nextNode !== null) { // the last element will have a null nextNode, let's use that!
            tail = tail.nextNode // iterates
        }
        tail.nextNode = node // when found append new node to nextNode of last node
        return this.head   
    }

    prepend(value) {
        let node = new Node(value, this.head.nextNode)
        let temp = this.head // "slice" the structure by saving head to temp
        if (this.head) {
            this.head = node // replace original head with new node
        }
        this.head.nextNode = temp // replace new node's nextNode with the original head node
    }

    size() {
        let pointer = this.head;
        let size = 0;
        while(pointer.nextNode !== null) { // same principle as append
            size++ // count interations
            pointer = pointer.nextNode;
        }
        return size; // number of iterations is equal to the size of the list!
    }

    heads() {
        return this.head
    }

    tails() {
        let pointer = this.head
        while(pointer.nextNode !== null) { // same as append and size
            pointer = pointer.nextNode
        }
        return pointer
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
console.log(list.heads())
console.log(list.tails())

