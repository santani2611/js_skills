//jo variables var use karke define hote hai
//unki hoistng ho jati hai
//yani code chalne se pehle unka gec ke code ke andar unke variables ko uf kar dete hai.
//isiko var ki hoisting bolte hai
// hoistig me
// var variables undefined ho jate hai unko even encountr karne ke pehle
// functions ke liye memory allocate ho jati hai
// yahan a var type ka tha isiliye usko log kiya gya toh uf aaya 
console.log("a",a);//a undedfined
var a;
console.log("a",a);//a undefined
a=5;
console.log("a",a);//a 5
fn();//in fn
function fn(){
    console.log("in fn");
}
fn();//in fn
fn1();// error  ---->> yahan error isliye aaya kyunki fn1() ek function experession hai
// aur function expersions ko hoist nhi kar sakte
//hoisting -----> declare karne ke pehle use kar lena
var fn1=function () {
    console.log("in fn1");
}
fn1();//in fn1
// function expressions cannot be hoisted matlab fun exp cannot be called before they are declared.