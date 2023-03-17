
 secondLargest=(arr)=>{
 let first=0
 let second=0
 for (let i = 0; i < arr.length; i++) {
    if (arr[i]>first) {
        second=first;
        first=arr[i]
        
    }
    else if(arr[i]>second){
        second=arr[i]

    }
 }
 console.log(`secondlargest is ${second}`);
    }


    let arr=[1,4,9,3]
    // secondLargest(arr)

//    find maximum & min ,find sum  and push to array
findMaxMin=(array)=>{
    let min=array[0]
    let max=array[0]
    for (let i = 1; i < array.length; i++) {
        if(array[i]>max){
            max=array[i]
        }
        if(array[i]<min){
            min=array[i]
        }        
    }
    let sum=max+min
    array.push(sum)
    console.log(`max is ${max} min is ${min} and sum is ${sum}`);
    console.log(array);
    return array
}




    // 3 largest

    thirdestNumber=(array)=>{
        let first=0
        let second=0
        let third=0

        for (let i = 0; i < array.length; i++) {
            if(array[i]>first){
                third=second
                second=first
                first=array[i]
            }
            else if(array[i]>second){
                third=second
                second=array[i]
            }
            else if(array[i]>third){
                third=array[i]
            }
            
        }
        console.log(`third number is ${third}`);
    }


    // reverse a array
    reverse=(array)=>{
        let newarray=[]
        for (let i = array.length-1; i >=0 ; i--) {
            newarray.push(array[i])
            
            
        }
        console.log(newarray);
    }





let array = [2, 4, 6, 8, 10]
// findMaxMin(array)
// thirdestNumber(array)
reverse(array)