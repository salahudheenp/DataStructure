selectionSort=(arr)=>{
  for (let i = 0; i < arr.length; i++) {
    let min=i
    let temp=arr[i]
    for (let j = i+1; j < arr.length; j++) {
        if (arr[j]<arr[min]) {
            min=j
        }
        
    }
    arr[i]=arr[min]
    arr[min]=temp
    
  }
  return arr
}

const arr=[10,2,3,4,7,20]
console.log(selectionSort(arr));