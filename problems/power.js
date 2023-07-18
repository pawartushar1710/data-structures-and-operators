

// power of number

// 9^4  -- 9x9x9x9


function FindPowerOfNum(num , power){

    let pow = 1;
    for (let i=1; i<=power; i++){
        pow = pow*num;
        //pow*=num;
    }
    console.log(pow);
};

FindPowerOfNum(2 , 5);
FindPowerOfNum(9 , 4);   