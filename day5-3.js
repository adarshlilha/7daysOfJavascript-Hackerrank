//Write your code below this line.
'use strict'
for (let element of my_array){
    if (getReverseString(element) === element)
        console.log(element);
}

function getReverseString(s){
    if (s===""){
        return "";
    }else{
        return getReverseString(s.substr(1)) + s.charAt(0);
    }
}