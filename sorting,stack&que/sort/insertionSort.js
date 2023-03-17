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

const arr=[70,30,40,50,10,60]
console.log(insertionSort(arr));