// 1) //  Write a function "addNumber" that takes a two number as arg and return their sum. Call the funtion before it is declared to demonstrate hoisting

function addNumber(a, b) {
    return a + b;
}

console.log(addNumber(2, 3));

// 2 )//  Write a function called "multiplyNumber" that take two number as arg and return their product.use function expression to difine the function and the call the function before it is declred to demonstate hoisting

function multiplyNumber(a, b) {
    return a * b;
}
console.log(multiplyNumber(10, 20))


// 3)  Write a function that take the two arg as the parameters and return their sum.Declare a variable inside the function using the var keyword and log their value to the console before tit is assign to value demonstrate variable hosting.


function add(x, y) {
    console.log("Before assignment:", data);
    var data;
    data = x + y;   
    console.log("After assignment:", data); 

    return data
}

const sum = add(3, 5);
console.log("Sum:", sum);


// 4)  decalre the vcariable using the let,var and const and show the out put inside the block to before and after the deaclaration

function variable() {
    console.log(x)
    console.log(y)
    console.log(z)
    let x = 10;
    var y = 20;
    const z = 30;
    console.log(x)
    console.log(y)
    console.log(z)
}

variable()

//  5) declare the let inside the block and attempt to log the value before initialise the value to demonsater the temperal zone


function letWorking(){
    console.log(x)
    let x;
    console.log(x)
} 
