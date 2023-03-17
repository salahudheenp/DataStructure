class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }


isEmpty () {
    return this.size===0
}
getSize(){
    return this.size
}

prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
     this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size ++
    
}

display(){
    if(this.isEmpty()){
        console.log("list is empty");
    }else{
        let curr=this.head
        let listValue=""
        while(curr){
            listValue+= ` ${curr.value} ` 
            curr=curr.next
        }
        console.log(listValue);
    }
}

}
const list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.display()
console.log(list);