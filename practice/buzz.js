


// function fizzbuzz(n){

//     for(let i = 1; i<=100; i++){
     
//         let fiz = 3;
//         let buz = 5;

//         if(i%fiz==0){
//             console.log("fizz");
//         }else if(i%buz==0){
//             console.log("buzz");
//         }

//         console.log(i)
//     }
// }

// fizzbuzz(100);





function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
      let fiz = 3;
      let buz = 5;
  
      if (i % fiz === 0 && i % buz === 0) {
        console.log("FizzBuzz");
      } else if (i % fiz === 0) {
        console.log("Fizz");
      } else if (i % buz === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  fizzbuzz(100);
  