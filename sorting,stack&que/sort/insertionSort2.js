function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = current
    }
    return arr
}

const arr=[2,5,4,3,7,9,10,1,50]
const array=insertionSort(arr)
console.log(array);