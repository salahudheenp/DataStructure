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

    isempty(){
        return this.size===0
    }

    prepend(value){
        const node=new Node(value)
        if(this.isempty()){
            this.head=node
            this.size++
        }else{
            node.next=this.head
            this.head=node
            this.size++
        }
        return
    }

    display(){
        if(this.isempty()){
            console.log("list is empty");
        }else{
            let listvalues=""
            let temp=this.head
            while (temp) {
                listvalues+=` ${temp.value} `
                temp=temp.next
                
            }
            console.log(listvalues);
        }
    }

    remove(value){
        let removedNode
        if(this.head.value===value){
            removedNode=this.head
            this.size--
        }else{
            let temp=this.head
            while (temp.next&&temp.next.value!=value) {
                temp=temp.next
            }
            removedNode=temp.next
            temp.next=removedNode.next
            this.size--
        }
        return
    }
}

const list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.display()
list.remove(20)
list.display()

