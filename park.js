
//if temperature between 20-25 & not raining -- childeren go to park for playing
//if temperature between 18-20 & raining -- childeren are not allowed to play outside


function GoToPark(temp,israining){

    if(temp>=20 && temp<=25 && !israining){

     console.log("Childeren are allowed to play outside home");

    } else if(temp>=18 && temp<=20 && israining ) {
        console.log("childeren are not allowed to play outside home")
    } else{
   console.log("Invalid")
     }
    
};

GoToPark(22,false);
GoToPark(18,true);
GoToPark(33,true);
