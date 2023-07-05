/*
function AttendClass(user){

    if(user=="student"){
        console.log("Allow to attend class");
    }else if(user=="Instructor"){
        console.log("Allow to attend class")
    }else{
        console.log("Dont Allow");
    }
};

AttendClass("student");
AttendClass("Instructor");
AttendClass("other"); */


function AttendClass(user){

    if(user=="student" || user=="Instructor"){
        console.log("Allow to attend class");
    
    }else{
        console.log("Dont Allow");
    }
};

AttendClass("student");
AttendClass("Instructor");
AttendClass("other")