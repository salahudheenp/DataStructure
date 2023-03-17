reverseString=(str)=>{
    let revStr=""
    for (let i= str.length-1 ; i >= 0; i--) {
         revStr+=str[i]
        
    }
    return revStr
}


// find a value in string

findLetter=(str,target)=>{
    for (let i = 0; i < str.length; i++) {
       if (str[i]===target) {
         console.log(`value ${str[i]} position is ${i+1}`);
        
       }
        
    }
}

const str="arjun"

// console.log(reverseString(str));
findLetter(str,"j");