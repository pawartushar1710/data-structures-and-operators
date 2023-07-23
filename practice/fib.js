//0,1,1,2,3,5,8,13.....

function nthinfib(n){

if(n<1){
    console.log(-1);
    return;
}else if(n==1){
    console.log(0);
    return;
}else if(n==2){
    console.log(1);
    return;
};

let i = 2;
let series = [0,1];
while(i<=n-1){
let newnumber = series[i-1]+series[i-2];
series.push(newnumber);    
i++;
}
console.log(series[n-1]);
};

nthinfib(3);
nthinfib(8);
