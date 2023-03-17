class  maxHeap{
    constructor(){
        this.heap=[]

    }


    insertMax(value){
        console.log(value);
        this.heap.push(value)
        this.bubbleUp()
    }
      bubbleUp(){
        let idx=this.heap.length-1
        let element=this.heap[idx]
        let length =this.heap.length
        while (idx>0) {
            let parentIdx=Math.floor((idx-1)/2)
            let parent = this.heap[parentIdx]
            console.log(parent,'//*');
          
            if (element<=parent) {
                break;
            }
            this.heap[parentIdx] = element
            this.heap[idx] = parent
            idx = parentIdx            
                
            

        }
    }

    removeMax(){
        let max=this.heap[0]
        let end=this.heap.pop()
        if (this.heap.length>0) {
            this.heap[0]=end
            this.bubbleDown()

        }

    }
    bubbleDown(){
        let max = this.heap[0]

        let idx=0
        let end=this.heap[0]
        while (true) {
            let leftIdx=2*idx+1
            let rightIdx=2*idx+2
            let left,right
            let swap=null
            if (leftIdx<this.heap.length) {
                left = this.heap[leftIdx]
                if (left>max) {
                    swap=leftIdx
                }
            }
            if (rightIdx<this.heap.length) {
                right = this.heap[rightIdx]

                if ((swap==null && right>max) || (swap!==null && right>left)) {
                    swap=rightIdx
                }
            }
            if (swap===null) {
                break
            }
            this.heap[idx]=this.heap[swap]
            this.heap[swap]=end
            idx=swap

        }
    }
}
const Heap=new maxHeap()
Heap.insertMax(20)
Heap.insertMax(10)
Heap.insertMax(30)
Heap.insertMax(50)
Heap.insertMax(7)
console.log("insert",Heap.heap);
Heap.removeMax()
console.log(Heap.heap);


heapSort=(arr)=>{
   let length=arr.length
   for (let i = Math.floor(length/2)-1;i>=0;i--) {
     heapify(arr,length,i)
    
   }
   for (let i =length-1;i>=0;i--) {
    swap(i,0)
    heapify(arr,i,0)    
   }
   console.log(arr);
}

heapify=(arr,length,i)=>{
    console.log(i,'******');
    let parent=i
    let leftIdx=2*i+1
    let rightIdx=2*i+2
    if (leftIdx<length && arr[leftIdx]>arr[parent]) {
        parent=leftIdx
    }
    if (rightIdx<length && arr[rightIdx]>arr[parent]) {
        parent=rightIdx
    }

    if (parent!==i) {
        swap(i,parent)
        heapify(arr,length,parent)
    }


}

swap=(num1,num2)=>{
    let temp=arr[num2]
    arr[num2]=arr[num1]
    arr[num1]=temp
}

let arr=[10,80,30,20,60,40]
heapSort(arr)