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

    append(value){
       const node=new Node(value)
       if(this.isEmpty()){
        this.head=node
       }else{
        let prev=this.head
        while(prev.next){
            prev=prev.next

        }
        prev.next=node
       }
       this.size++
    }

    toArray(arr){
        for (let i = 0; i < arr.length; i++) {
           this.append(arr[i])            
        }
}

display(){
    let prev=this.head
    let a=""
    while (prev) {
        a+=` ${prev.value} `

        prev=prev.next
    }
    console.log(a);
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

insert(value,index){
    if(index<0 || index>this.size){
        console.log("jf");
    }
    if(index===0){
        prepend(value)
    }else{
        const node=new Node(value)
        let curr=this.head
        for(let i=0 ; i<index-1;i++){
            curr=curr.next
        }
        node.next=curr.next
        curr.next=node
    }
    this.size++

}
changemiddle(){
    
}
}



const linkedlist=new LinkedList()
linkedlist.append(23)
linkedlist.append(43)
linkedlist.append(33)
linkedlist.append(63)
// linkedlist.toArray([10,20,30])
// console.log(linkedlist);
linkedlist.display()
// linkedlist.reverse()
linkedlist.insert(100,2)
linkedlist.display()
