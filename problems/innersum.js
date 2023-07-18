
//calculating the sum of inner digits

// 5678 --> 13

//if num = 88 or 1 return -1

function innerDigitsum(num){

    let newstr = num.toString();

    if(newstr.length<=2){
        console.log(-1);
        return;
    };

    let sum = 0;
    
    for(let i=1; i<=newstr.length-2; i++){
        sum+=Number(newstr[i]);
    }
    console.log(sum);
};

innerDigitsum(4);
innerDigitsum(44);
innerDigitsum(444);
innerDigitsum(4444);
innerDigitsum(44444);