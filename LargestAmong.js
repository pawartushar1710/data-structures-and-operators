
// largest among 
// a=55 b=45 c=35

function LargestNum(a,b,c){

    if(a>b && a>c){
        console.log(a + "  Largest");
    }else if(a<b && c<b){
        console.log(b +" Largest");
    }else{
        console.log(c + " Largest");
    }
};

LargestNum(55,45,35); //55

LargestNum(45,55,40); //55
LargestNum(33,2,66);  //66