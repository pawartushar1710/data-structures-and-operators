
// check ordre 
//Increasing or Decreasing or none


function CheckOrder(a,b,c){
    if(a>b && b>c){
console.log("Decreasing Order");
    }else if(a<b && b<c){
console.log("Increasing Order")        
    }else{
console.log("its not increasing nor decreasing");        
    }
};

CheckOrder(48,45,40);
CheckOrder(40,45,48);
CheckOrder(48,40,45);