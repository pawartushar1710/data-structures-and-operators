

// calculate factorial

// input = 5 

//output = 5x4x3x2x1 = 120


function factorialofnumber(n){

    let factor = 1;

    for(let i=1; i<=n; i++){
        factor*=i;
    }
    console.log(factor);
}

factorialofnumber(5);
factorialofnumber(7);