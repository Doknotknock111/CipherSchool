// Hosting

one();
//two(); // function expression doesn't get hoisted
function one(){  // function declared
    console.log("one");
}

function three(callBack){
    callBack();
}


let two = function(){ // function expression
    console.log("two");
}

two();
three(two);
