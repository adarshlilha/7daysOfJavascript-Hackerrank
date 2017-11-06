//Finds the second Largest element in an array
function processData(myArray) {
    //Sort the array first
    myArray.sort(function(a,b){
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    });
    //Gets the second largest number
    function getSecondLargest(){
        var largest = myArray.splice(myArray.length-1,1);
        myArray.reverse();
        for (var i in myArray){
            if (myArray[i] < largest){
                return myArray[i];
            }
        }
    }
    console.log(getSecondLargest());
}
