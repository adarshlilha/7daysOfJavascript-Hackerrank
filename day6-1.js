function processData(input) {
    //Enter your code here
    let lines = input.split('\n');
    let firstLine = lines[0].split(' ');
    let n = Number(firstLine[0]);
    let k = Number(firstLine[1]);
    let secondLine = lines[1].split(' ');
    secondLine = secondLine.sort(function(a,b){return a-b;});
    
    let i=0;
    let mysum = 0;
    while (true){
        if (mysum > k){
            mysum -= Number(secondLine[--i]);
            break;
        }
        mysum += Number(secondLine[i]);
        i++;
    }
     console.log(i);
} 