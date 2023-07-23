
// function 

// "hello world"
// output = "Hellow World"


// function uppercase(str) {
   
//      let newstr = str.split(' ')

//       //[hello world]

//       .map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       .join(' ');
//       console.log(newstr)
//   }
//  uppercase("hello world");
  


 function uppercase(str){

    let newstr = str.split(' ') // here newstr become [" lets have some fun"]

    .map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');

console.log(newstr)

 };

 uppercase("lets have some fun");
