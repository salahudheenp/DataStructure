// heapSort=(arr)=>{
//    let length=arr.length
//    for (let i = Math.floor(length/2)-1; i>=0; i--){
//       heapify(arr,length,i)
//    }

//    for (let i = length-1; i >=0; i--) {
//       swap(0,i)
//       heapify(arr,i,0)
    
//    }
//    console.log(arr);
// }


// heapify=(arr,length,i)=>{
//     let parent=i
//     let left=2*i+1
//     let right=2*i+2
//     while (left<length && arr[left]>arr[parent]) {
//         parent=left
//     }
//     while (right<length && arr[right]>arr[parent]) {
//         parent=right
//     }
//     if (parent!==i) {
//         swap(parent,i)
//         heapify(arr,length,parent)
//     }
                
    
   
// }

// swap=(num1,num2)=>{
//     let temp=arr[num2]
//     arr[num2]=arr[num1]
//     arr[num1]=temp
// }






heapSort=(arr)=>{
    let length=arr.length
    for (let i =Math.floor(length/2)-1; i>=0; i--) {
       heapify(arr,length,i)
        
    }
    for (let i = length-1; i>=0; i--) {
        swap(i,0)
        heapify(arr,i,0)
        
    }
    console.log(arr);
 
}


heapify=(arr,length,i)=>{
    let parent=i
    let left=2*i+1
    let right=2*i+2
    if (left<length && arr[left]>arr[parent]) {
        parent=left
    }
    if (right<length && arr[right]>arr[parent]) {
        parent=right
    }
    if (parent!==i) {
        swap(parent,i)
        heapify(arr,length,parent)
    }
}

swap=(num1,num2)=>{
    let temp=arr[num2]
     arr[num2]=arr[num1]
     arr[num1]=temp

}

let arr = [4, 10, 16, 20, 30, 40]
heapSort(arr)