

// removing duplicate
// [1,2,2,3,4,4,5] .output..> [1,2,3,4,5]

function removeduplicates(arr){

    let newarr = [];

    for(let i=0; i<=arr.length-1; i++){
        for(let j=1;j<=arr.length-1; j++){
            if(arr[i]==arr[j])
            continue;
            newarr.push(arr[i])
        }
    }
    console.log(newarr)
};

removeduplicates([1,2,2,3,4,4,5]);
