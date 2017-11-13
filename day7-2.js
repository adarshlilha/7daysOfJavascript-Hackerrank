var myodd = -1;
for (var i=1;i<10;i++){
	myodd += 2;
}
var spaces = '';
var number = '';
var myodd1 = 1;
for (var i=0;i<10;i++){
	if (i === 0){
		for (var j=0;j<(myodd-1)/2;j++){
			spaces += ' ';
		}
		console.log(spaces + '*');
	}else{
		number = '';
		spaces = '';
		for (var j=0;j<(myodd-1)/2;j++){
			spaces += ' ';
		}
		for (var k=0;k<myodd1;k++){
			number += '0';
		}
		console.log(spaces + number);
		myodd1 += 2;
		myodd -= 2;
	}
}