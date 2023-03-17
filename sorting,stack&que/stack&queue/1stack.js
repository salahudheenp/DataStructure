class stack {
    constructor() {
        this.item = []
    }

    push(element) {
        this.item.push(element)
    }

    pop() {
        return this.item.pop()
    }

    peak() {
        return this.item[this.item.length - 1]
    }

    isEmpty() {
        return this.item.length === 0
    }

    size() {
        return this.item.length
    }

    print() {
        console.log(this.item.toString());
    }
}


const stack1 = new stack()
stack1.push(20)
stack1.push(10)
stack1.push(40)
stack1.print()
stack1.pop()
stack1.print()
console.log(stack1.peak());
