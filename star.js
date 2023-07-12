
//printing stars

function PrintStars(num){

    for (let i = 1; i<=num; i++){

        let star = "";
        for(j=1; j<=i; j++){

            star+="*"
        } 
         console.log(star) 
    }
};

PrintStars(5)