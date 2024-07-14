//object 

let obj ={
    name:'CipherSchool'
};
console.log(obj);

let person ={
    name : 'John',
    email : 'john@wick.com',
    age : 48,
    status : true,
    children : {
        name : 'Jay'
    },
    hobbies : ["Reading", "Writing", 100, true, null]
};

console.log(person);
console.log(person.name);
console.log(person['children']);
person.country = 'India';
person['sex'] = 'M';
console.log(person);