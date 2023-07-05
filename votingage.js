

// voting age

function IsvotingAge(age){

    if(age>0 && age<18){
        console.log("You Are Not Able To Vote...");
    }else if(age>=18){
        console.log("You Are Able To Vote...");
    }else{
        console.log("Invalid-Age...");
    }
};

IsvotingAge(2);   //no
IsvotingAge(0);   //invalid
IsvotingAge(22);  //yes
IsvotingAge(18);  //yes
IsvotingAge(17);  //no
