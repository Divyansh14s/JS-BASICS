function myName(){
    console.log("Divyansh");
}
myName();

function sum(a,b) {
    console.log(a+b);
}
sum(2,3)

function sum1(a,b) {
    console.log(a+b);
    return a+b;
}
sum1(2,4)

function sum2(a,b) {
    return a+b;
}
x=console.log(sum2(10,10))

function sum3(a=10,b=20) {
    return a+b;
}
y=console.log(sum3(5))

const sayhii=() => {
    console.log("DIVYANSH")
}
sayhii()

const sum4=(a,b)=>(a*b)-(a+b);
console.log(sum4(6,6))

//If we use carly braces then return keyword should be used

// stud.greeting=()=>log("hello")
// stud.greeting()

const sum5=(...num) => {
    console.log(num);
}
sum5(1,2,3,4,5,6,7,8,9,10,11);
sum5(14);

//immediately invoked function expression (IIFE)

(
    () => {
        console.log("I AM STUDENT");

    }
)();

((uname)=> {
    console.log('${uname} is logged in');
}
)("Divyansh");
