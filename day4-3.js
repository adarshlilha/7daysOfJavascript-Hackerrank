// write the correct arrow function here
var my_function = (arr) => {
    return (arr.map(element => (element%2 == 0)?(arr[arr.indexOf(element)] = element+1):(arr[arr.indexOf(element)] = element-1)));
};