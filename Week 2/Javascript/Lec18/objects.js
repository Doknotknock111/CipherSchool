//object 

// let obj ={
//     name:'CipherSchool'
// };
// console.log(obj);

// let person ={
//     name : 'John',
//     email : 'john@wick.com',
//     age : 48,
//     status : true,
//     children : {
//         name : 'Jay'
//     },
//     hobbies : ["Reading", "Writing", 100, true, null]
// };

// console.log(person);
// console.log(person.name);
// console.log(person['children']);

// person['sex'] = 'M';
// console.log(person);

// person.country = 'India';
// console.log(year); uses stack pass by value
// let year = 2024;

// lec18

let person ={
    name : 'John',
    email : 'john@wick.com',
    age : 48,
    count:0,
    status : true,
    children : {
        name : 'Jay'
    },
    hobbies : ["Reading", "Writing", 100, true, null],
    // login: function(){
    //     console.log(this.name, 'has logged in');
    // }
    // login: () => {
    //     console.log(this);
    // },
    logout: function(){
        console.log('logout', this);
    },
    login(){ //shortcut
        console.log('login');
    },
    updateCount(){
        this.count++;
        console.log(this.count);
        return this;
    }

};

person.login(); //it will pass window as its context
person.logout(); // person 

person.updateCount().login();