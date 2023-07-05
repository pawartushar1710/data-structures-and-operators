
// using switch

function Printresult(grade){

    switch(grade){
        case "A+": {
            console.log("First Class");
        };
        break;   
        case "A" :{
            console.log("Distinction");
        };
        break;
        case "B" : {
            console.log("Second Class");
        };
        break;
        case "C" : {
            console.log("Fail");
        };
        break;
        default : {
            console.log("Invalid-Grade");
        }
    }
};

Printresult("A+");
Printresult("A");
Printresult("B");
Printresult("C");
Printresult("D");




