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

    isEmpty(){
        return this.size==0
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
        this.size++
    }


    insert(value,index){
        if(index<0 || index>this.size){
            console.log("Invalid index");
            return

        }
        if(index===0){
            this.prepend(value)

        }else{
            const node = new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            prev.next = node
            node.next=prev.next

        }
        this.size++

    }

    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head
            let listValue = ''
            while (curr) {
                listValue += ` ${curr.value}`
                curr = curr.next
            }
            console.log(listValue);
        }
    }
}

const list=new LinkedList()
list.insert(10,0)
list.insert(30,1)
list.insert(40,2)
list.insert(50,3)
list.insert(20,4)

list.display()
// console.log(list);