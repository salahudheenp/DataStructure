binarySearch=(arr,target,start,end)=>{
    if(start<=end){
        let mid=Math.floor((start+end)/2)
        if (arr[mid]===target) {
            return mid+1
            
        }else if(arr[mid]<target){
            return binarySearch(arr,target,mid+1,end)
        }else if(arr[mid]>target){
            return binarySearch(arr,target,start,mid-1)
        }
    }
    return -1
}


let arr=[2,4,6,8,10,12,14]
console.log(binarySearch(arr,10,0,arr.length-1));