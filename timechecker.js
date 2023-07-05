
//checking time

function Checktime(time){

   if(time>=4 && time<12){
    console.log("Morning")
   }else if(time>=12 && time<17){
    console.log("Afternoon");
   }else if(time>=17 && time<=22){
    console.log("Evening")
   }else if(time>=22 && time<=4){
    console.log("night")
   }else{
    console.log("Invalid")
   }

};


Checktime(11);
Checktime(13);
Checktime(21);
Checktime(22);
Checktime(3);
Checktime(25);
