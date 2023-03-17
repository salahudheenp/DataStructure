const LinkedList=require('../list')

class stackList{
    constructor(){
        this.list=new LinkedList()
    }
    push(value){
        this.list.prepend(value)
    }
    pop(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        this.list.getSize()
    }
    print(){
        this.list.print()
    }
}

const stack=new stackList()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.peek());