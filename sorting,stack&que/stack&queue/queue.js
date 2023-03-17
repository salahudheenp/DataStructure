class queue{
    constructor(){
        this.item=[]
    }

    enqueue(element){
        this.item.push(element)
    }

    dequeue(){
        this.item.shift()
    }

    isEmpty(){
        return this.item.length===0
    }
    
    peek(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }

    size(){
        return this.item.length
    }

    print(){
        console.log(this.item.toString());
    }
}

const Queue=new queue()
Queue.enqueue(10)
Queue.enqueue(40)
Queue.enqueue(30)
Queue.enqueue(20)
Queue.print()
Queue.dequeue()
Queue.print()
console.log(Queue.peek());
