

// assign grades according to marks


function Grade(marks){
    if(marks>=90){
        console.log("A");
    }else if(marks>=80 && marks<=89){
        console.log("B");
    }else if(marks>=60 && marks<=79){
        console.log("C");
    }else if(marks>=33 && marks<=59){
        console.log("D")
    }else if(marks<33){
        console.log("F");
    }
};

Grade(77);  //C
Grade(87);  //B 
Grade(89);  //B
Grade(91);  //A
Grade(79);  //C
Grade(60);  //C
Grade(59);   //D
Grade(44);  //D
Grade(33);  //D
Grade(32);  //F
