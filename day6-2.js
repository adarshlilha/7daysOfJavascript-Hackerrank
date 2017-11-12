var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(getHeight(n));
    }
    function getHeight(num){
    h=1;flag='spring';
    while (true){
        if (num === 0){
            return h;
        }
        else if (flag === 'spring'){
            h = h*2;
            num--;
            flag = 'summer';
        }
        else if (flag === 'summer'){
            h+=1;
            num--;
            flag = 'spring';
        }
      }
    }