class minHeap{
    constructor(){
        this.heap=[]

    }

    insert(value){
         this.heap.push(value)
         this.bubbleUp()
    }

    bubbleUp(){
        let i=this.heap.length-1
        let element=this.heap[i]
        while (i>0) {
            let parentIndx=Math.floor((i-1)/2)
            let parent=this.heap[parentIndx]
            if (element>=parent) {
                break
            }
            this.heap[parentIndx]=element
            this.heap[i]=parent
            i=parentIndx
        }
    }

    reomoveMin(){
        let end=this.heap.pop()
        let min=this.heap[0]
        if (this.heap.length>0) {
            this.heap[0]=end
            this.bubbleDown()
        }
        return min
    }

    bubbleDown(){
        let idx = 0
        const length = this.heap.length
        const element = this.heap[0]
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx]
                if (leftChild < element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx]
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIdx
                }

            }
            if (swap === null) {
                break
            }
            this.heap[idx] = this.heap[swap]
            this.heap[swap] = element
            idx = swap
        }
       }
}


const heap=new minHeap()
heap.insert(10)
heap.insert(7)
heap.insert(3)
heap.insert(20)
heap.insert(1)
console.log(heap.heap);
heap.reomoveMin()
console.log(heap.heap);
