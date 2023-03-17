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

    getSize(){
        return this.size
    }


    // append

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
        let curr=this.head
        while (curr.next) {
            curr=curr.next
        }
        curr.next=node
        }
        this.size++

    }


    // prepend
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
        }else{
            let curr=this.head
            node.next=curr
            this.head=node
            this.size++
        }
    }


    // insert with value && index
    insert(value,index){
        if(index<0 || index>this.size){
            console.log("invalid index");
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node= new Node(value)
            let curr=this.head
            for (let i = 0; i < index-1; i++) {
                curr=curr.next
            }
            node.next = curr.next
            curr.next=node
            this.size++
        }

    }


    // remove with value

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
           let curr=this.head
           let removedNode
           while(curr.next&&curr.next.value!==value){
            curr=curr.next
           }
           if(curr.next){
               removedNode = curr.next
               curr.next = removedNode.next
               this.size--
               return value
           }
            return null
           
        }

    }



    // remove Index
    removeIndex(index){
       if(index<0 || index >this.size){
        return null
       }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=removedNode.next
            this.size--
        }else{
            let curr=this.head
            for (let i = 0; i < index-1; i++) {
             curr=curr.next
            }
            let removedNode=curr.next
            curr.next=removedNode.next
            this.size--
            
        }
       return removedNode
    }


    // reverse

    reverse(){
        let prev=null
        let next
        let curr=this.head
        while (curr) {
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next           
        }
        this.head=prev
    }

    // search
    search(value){
        if (this.isEmpty()) {
            return -1
        }
        let i=0
        let curr=this.head
        while (curr) {
            if (curr.value==value) {
                return i+1
            }
            curr=curr.next
            i++
        }
        return -1

    }

    // display

    display(){
        if(this.isEmpty()){
            console.log("list is empty");
        }
        let prev=this.head
        let listValue=""
        while (prev) {
            listValue+=` ${prev.value} `
            prev=prev.next
        }
        console.log(listValue);
    }

    //  middile element
    middleElemnt(){
         let fast=this.head
         let slow=this.head
         while (fast&&fast.next) {
        slow=slow.next
        fast=fast.next.next    
        }
        console.log(`mid is ${slow.value}`);

        // let first=this.head;
        
    }
    //  array to linked list
    arrayToList(arr){
        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i])
            
        }
    }

    // linkedlist to array

    listToArray(){
        let curr=this.head
        let array=[]
        while (curr) {
            array.push(curr.value)
            curr=curr.next
        }
        console.log(array);
        return array
    }

}


const list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.display()
list.append(70)
list.append(30)
list.display()
list.insert(100,4)
// list.reverse()
// list.removeIndex(1)
// list.removeValue(10)

list.display()
list.middleElemnt()

list.listToArray()

let array=[10,20,30,40,50]
console.log(list.arrayToList(array))
list.display()

// list.search(30)
// list.display()

// console.log(list.search(70));