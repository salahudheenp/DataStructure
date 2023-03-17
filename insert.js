class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0

    }
    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("this index not available");
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)

            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            prev.next = node
            node.next = prev.next

            this.size++
        }
    }


    toArray() {
        console.log(list,+ '**********', this.head);
        let arr = []
        let curr = this.head

        while (curr) {
            arr.push(curr.value)
            curr = curr.next

        }
        console.log(arr);
        return arr

    }
    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let currnt = this.head
            let listValue = ''
            while (currnt) {
                listValue += ` ${currnt.value}`
                currnt = currnt.next
            }
            console.log(listValue);
        }
    }
}


let list = new LinkedList()
list.insert(10, 0)
list.insert(104, 1)
list.insert(1003, 2)
list.insert(100, 3)
list.insert(1004, 4)
// list.display()
console.log(list);
list.toArray()


