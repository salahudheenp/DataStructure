 function fibonacci(n){
    if(n<2){
        return n
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2)
    }

}

console.log(fibonacci(4));

// function fib(val) {
//     a=0;
//     b=1;
//     c=a+b;
//     let str=[];
//     str.push(a);
//     str.push(b);
//     while (c < val) {
//         str.push(c);
//         a=b;
//         b=c;
//         c=a+b;
//     }
//     return str;
// }

// console.log(fib(6));