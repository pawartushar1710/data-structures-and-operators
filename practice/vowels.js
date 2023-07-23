

//
// function vowelscount(str){

//     let vowels = ["a","e","i","o","u"]

//     let arr =[];

//     for(let i=0; i<=str.length-1; i++){
//         if(str(i)==vowels){
//             arr.push(str[i])
//         }
//     }
//     console.log(arr.length)
// }

// vowelscount("tushar")

function vowelscount(str){
    let vowels = ["a","e","i","o","u"];
    let arr = [];

    for(let i = 0 ; i<=str.length-1; i++){
        if(vowels.includes(str[i]))
        arr.push(str[i]);
    }
    console.log(arr.length);
};

vowelscount("cricket")
  