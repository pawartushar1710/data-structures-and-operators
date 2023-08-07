

const obj = {

    "name":"Relevel"

};

//seal will prevent adding new property , changes to existing object
Object.seal(obj)
obj.name="Unacadmy";
obj.website="www.relevel.com"
console.log(obj)


//seal cant add , delete but will update existing property


console.log(Object.isSealed(obj))