class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }


    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }


    // insert in last(append)

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node

        }
        this.size++
    }


    // insert in head(prepend)
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    // insert with value & index
    insert(value,index){
        if(index<0 || index>this.size){
            console.log("index is not ")
            return
        }
       if(index===0){
            this.prepend(value)
            return
        }else{
            const node =new Node(value)
            let curr=this.head
            for(let i=0;i<index-1;i++ ){
               curr=curr.next;
            }
            node.next=curr.next;
            curr.next=node
            this.size++

        }

    }

    // display

    display(){
        if(this.isEmpty()){
            console.log("list is empty");
        }
        let curr=this.head
        let listValues=""
        while (curr) {
            listValues+=` ${curr.value}`
            curr=curr.next
        }
        console.log(listValues);

    }


    // reverse
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


    // remove value
    removeValue(value){
        if(this.isEmpty()){
            console.log("list is empty");
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.sze--
        }else{
            let curr=this.head
            while (curr.next && curr.next.value!=value) {
                curr=curr.next
            }
            if(curr.next){
                const removedNode=curr.next
                curr.next=removedNode.next
                this.size--
                return value

            }else{
                console.log("no element");
            }
        }
        
    }


    // remove  index
    removeIndex(index){
        if (index<0||index>this.size){
            return console.log("invalid index");

        }
        let removedNode
        if(index===0){
             removedNode=this.head
            this.head=this.head.next
            this.size--
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
             removedNode=prev.next
            prev.next=removedNode.next
            this.size--
            return removedNode.value
               
            } 
         

            
        

    }

    // search

    search(value){
        if (this.isEmpty()) {
            return -1
        }else{
            let i=0
            let curr=this.head
            while (curr) {
                if (curr.value===value) {
                    console.log(`${value} found at position ${i} `);
                    return
                }
                curr=curr.next
                i++
                
            }
            console.log("no element found");
        }

    }
}



const list=new LinkedList()
// list.append(20)
list.prepend(100)
list.prepend(100)
list.insert(30, 1)
list.append(20)
list.append(70)
list.insert(40, 2)
list.insert(50, 3)
list.reverse()
list.removeValue(40)
list.removeIndex(3)
list.display()
list.removeIndex(4)
list.display()


