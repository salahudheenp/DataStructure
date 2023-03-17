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
        return this.size===0
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head
            let listValue = ""
            while (curr) {
                listValue += ` ${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }

    remove(index){
        if(index<0 || index >=this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value

    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!== value){
                prev=prev.next
            }
            if(prev.next){
                const removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }
            return null
        }
    }


    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=1
        let curr=this.head
        while(curr){
            if(curr.value===value){
                return i
            }
            curr=curr.next
            i++
        }
        return -1
    }


    reverse(){
      let prev=null
      let curr=this.head
      while (curr) {
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
        
      }
      this.head=prev
    }
}


const list=new LinkedList()

list.prepend(10)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(50)
list.prepend(80)
list.display()
console.log(list.search(10));
list.reverse()
list.display()