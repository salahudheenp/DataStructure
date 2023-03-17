mergeSort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))


}


merge=(left,right)=>{
    let sortedArray=[]
    while (left.length&&right.length) {
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray,...left,...right]
}

const arr=[10,2,30,4,7,8]
let sort =mergeSort(arr)
console.log(sort);