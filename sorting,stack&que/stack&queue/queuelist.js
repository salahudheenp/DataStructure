const LinkedList=require('../list')

class queueList{
    constructor(){
        this.list=new LinkedList()
    }
    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    print(){
        console.log("/////////");
        this.list.print()
    }
}

const queue=new queueList()
queue.enqueue(20)
queue.enqueue(50)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek());
