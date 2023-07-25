
//finding min. and max. 

function MaxMin(arr){

    if(arr.length===0){
        return{};
    };
    
    let Max =arr[0];
    let Min =arr[0];

    for(let i=1; i<=arr.length-1; i++){
        if(arr[i]>Max){
            Max = arr[i];
        }

        if(arr[i]<Min){
            Min = arr[i];
        }
    }
     return{Max , Min}
}


console.log (MaxMin([4,55,8,66,43,2,87,11,2]));
console.log (MaxMin([55,11,]));
console.log (MaxMin([]));


