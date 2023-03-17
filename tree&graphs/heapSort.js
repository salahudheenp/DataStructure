// function heapSort(array) {
//     // Build max heap
//     let n = array.length;
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {

//     }

//     // Extract elements one by one
//     for (let i = n - 1; i >= 0; i--) {
//         // Move current root to end
//         let temp = array[0];
//         array[0] = array[i];
//         array[i] = temp;

//         // Call max heapify on the reduced heap
//         heapify(array, i, 0);
//     }
//     return array;
// }

// function heapify(array, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     // Check if left child is larger than root
//     if (left < n && array[left] > array[largest]) {
//         largest = left;
//     }

//     // Check if right child is larger than root
//     if (right < n && array[right] > array[largest]) {
//         largest = right;
//     }

//     // If root is not largest, swap with largest and continue heapifying
//     if (largest !== i) {
//         let temp = array[i];
//         array[i] = array[largest];
//         array[largest] = temp;

//         heapify(array, n, largest);
//     }
// }


// const arr = [32, 6, 41, 22, 63]
// console.log(heapSort(arr));




// end

// class HeapSort3 {
//     constructor(array) {
//         this.array = array
//     }
//     swap(input, index_A, index_B) {
//         let temp = input[index_A]
//         input[index_A] = input[index_B]
//         input[index_B] = temp
//     }

//     heapify(array, index, length) {
//         let left = 2 * index
//         let right = 2 * index + 1
//         let maximum

//         if (right < length) {
//             if (array[left] >= array[right]) {
//                 maximum = left
//             } else {
//                 maximum = right
//             }
//         } else if (left < length) {
//             maximum = left
//         } else {
//             return
//         }

//         if (array[index] < array[maximum]) {
//             this.swap(array, index, maximum)
//             this.heapify(array, maximum, length)
//         }
//     }
//     sort() {
//         let length = this.array.length
//         for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
//             this.heapify(this.array, i, length)
//         }
//         for (let i = length-1; i >=0; i--) {
//             this.swap(this.array,0,i)
//             this.heapify(this.array,0,i)

//         }
//         return this.array
//     }
// }

// let array = [4, 2, 5, 7, 3, 7, 32, 4]
// let heap = new HeapSort3(array)
// console.log(heap.sort());



function sort(arr) {
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, N, i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
}

/* A utility function to print array of size n */
function printArray(arr) {
    var N = arr.length;
    for (var i = 0; i < N; ++i)
        console.log((arr[i] + " "));;

}

let array =[11,19,20,30,1,3,4,]
printArray(array)

console.log(
    sort(array)

);
printArray(array)
