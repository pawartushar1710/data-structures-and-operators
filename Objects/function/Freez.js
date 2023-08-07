
const obj = {

    "name":"Relevel"

};

//freez will prevent adding new property , changes to existing object
Object.freeze(obj)
// adding new properties to existing obj
obj.website = "ww.relevel.com";
console.log(obj)
// changing key
obj.name="Unacadmy";
console.log(obj)

// freeze cant add , update or delete

console.log(Object.isFrozen(obj))