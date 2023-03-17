class maxHeap{
    constructor(){
        this.heap=[]
    }
    heapify(arr){
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i])
            
        }

    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx=this.heap.length-1
        const element=this.heap[idx]
        while (idx>0) {
            let parentIndex=Math.floor((idx-1)/2)
            let parent=this.heap[parentIndex]
            if (element<=parent) {
                break
            }
            this.heap[parentIndex]=element
            this.heap[idx]=parent
            idx=parentIndex
        }
    } 

    // remove max

    removeMax(){
        const max=this.heap[0]
        const end=this.heap.pop()
        if (this.heap.length>0) {
            this.heap[0]=end
            this.swapping()
        }
        return max
    }
    swapping(){
        let idx=0
        const length=this.heap.length
        const element=this.heap[0] 
        while (true) {
            let leftChildIdx=2*idx+1
            let rightChildIdx=2*idx+2
            let leftChild,rightChild
            let swap=null
            if (leftChildIdx<length) {
                leftChild=this.heap[leftChildIdx]
                if (leftChild>element) {
                    swap=leftChildIdx
                }
            }
            if (rightChildIdx<length) {
                rightChild=this.heap[rightChildIdx]
                if ((swap===null&&rightChild>element)||(swap!==null&&rightChild>leftChild )) {
                    swap=rightChildIdx
                }

            }
            if (swap===null) {
                break
            }
            this.heap[idx]=this.heap[swap]
            this.heap[swap]=element
            idx=swap 
        }
    }
}


let Heap=new maxHeap()
// Heap.insert(20)
// Heap.insert(10)
// Heap.insert(65)
// Heap.insert(30)
// Heap.insert(40)
// Heap.insert(70)
// Heap.insert(60)
// Heap.insert(160)
console.log(Heap.heap,'******');
// Heap.removeMax()
let arr=[10,20,50,30,40] 
Heap.heapify(arr)
console.log(Heap.heap,'///');