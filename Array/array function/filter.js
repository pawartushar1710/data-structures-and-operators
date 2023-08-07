// filter function

const num = [23,34,5,66,72,1,3,44];

const iseven = (num)=>num%2==0;

//console.log(num.filter(iseven));

//console.log(num.map(iseven));

// name with length less or equal 5
const students = ["tushar","pawar","jadhav","civil","mech","computer"];

//console.log(students.filter(str=> str.length<=5));

const studentdata = [
    {"name":"student1", age: 21},
    {"name":"student2", age: 17},
    {"name":"student3", age: 25},
    {"name":"student4", age: 24},
    {"name":"student5", age: 16},
    {"name":"student6", age: 11}
];


console.log(studentdata.filter((obj)=>{obj.age>18}));