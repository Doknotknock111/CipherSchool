//ES6 class keyword

// console.log({name:'Audi'});

class Person{
    constructor(name, email, count=0){
        this.name = name;
        this.email = email;
        this.count = count;
    }
    login(){
        console.log(this.name, 'has logged in!');
    }
    logout(){
        console.log(this.name, 'has logged out!');
    }
}

let person1 = new Person('John', 'john@wick');
console.log(person1);
let person2 = new Person('Jay', 'jayn@z');

person1.login();
person2.logout();


let rollno = new Number(20);
console.log(rollno);
let name = new String('Cipher');
console.log(name);