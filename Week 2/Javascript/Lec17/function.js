
// function testing(){
//     var abc = 20;
    
//     if(1){
//         let xyz = 'block scoped';
//         console.log("inside the "+xyz);
//         console.log(abc);
//     }
//     console.log('Outside the '+xyz); // not able to access 
// }

// testing(); //calling the function

// var name = 'Cipher';
// let year = 2024; // Global scope

// function test(){
//     console.log(name);
//     console.log(year);
// }
// test();

// function Declaration and function expression 

// function myfunc(){
//     console.log("Inside function declaration");
// }

// let myfunc2 = function(){
//     console.log('Inside function expression');
// }

// myfunc();
// myfunc2();

// Hoisting

// console.log(name);
// console.log(nm);

// var nm = 'School';

// let name = 'Cipher';

// test();

// var test = function(){
//     console.log('Hello');
// }


//Arrow function 

let myfunc = () =>{
    console.log('Arrow function created');
}

myfunc();

let funcExp = function(){
    console.log('Inside function expression');
    console.log(this);
}

funcExp();

let myfuncnm = (name) =>{ //parametre
    console.log(name);  
}

myfuncnm('Cipher'); //arguments