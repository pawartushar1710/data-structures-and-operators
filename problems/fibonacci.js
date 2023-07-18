
//0,1,1,2,3,5,8,13,21,34.........n^n

function nthnumberinfibseries(n){

if(n<1){
    console.log(-1);
    return;
}; 
if(n==1){
    console.log(0);
    return;
};  
if(n==2){
    console.log(1);
    return;
};  

let i = 2;

let series = [0,1];

while(i<=n-1){
    newnum = series[i-1]+series[i-2];
    series.push(newnum);
    i++;
}
    console.log(series[n-1]);
};

nthnumberinfibseries(5);
nthnumberinfibseries(55);
nthnumberinfibseries(0);
nthnumberinfibseries(1);
nthnumberinfibseries(2);