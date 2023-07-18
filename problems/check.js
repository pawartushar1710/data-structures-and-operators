

// create a programme to find the number is positive ,negative or zero
// check for condition with 0 with switch case

// function posornegorzero(num){

//     switch(num){
//         case(num>0):{
//             console.log("Is Positive Number");
//         }
//         break;
//         case(num<0):{
//             console.log("Is Negative Number");
//         }
//         break;
//         case(num==0):{
//             console.log("Is Zero");
//         }
//         default :{
//             console.log("Invalid")
//         }
//     }
// };

// posornegorzero(1);
// posornegorzero(-1);
// posornegorzero(0);


function Identifythenum(num){
    if(num>0){
        console.log(num+" Is Positive")
    }else if(num<0){
        console.log(num+" Is Negative")
    }else if(num==0){
        console.log(num+" Is Zero")
    }else{
        console.log("Invalid")
    }
};

Identifythenum(1);
Identifythenum(-1);
Identifythenum(0);
Identifythenum("rtr");
