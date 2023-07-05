

//checking is number even or odd

function EvenorOdd(num){

    if(num%2==0){
        console.log("Even");
    }else if(num%2!==0){
        console.log("Odd");
    }else{
        console.log("Please Enter Valid Num")
    }
};

EvenorOdd(10);
EvenorOdd(15);
EvenorOdd("67");
