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


const stack = new stack()
stack.push(20)
stack.push(10)
stack.push(40)
stack.print()