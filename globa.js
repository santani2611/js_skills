// console.log("line number 1",varName);//undefined
// var varName=10;

// function b(){
//     console.log("line number 5",varName);//10
// }
// console.log("line number 7",varName);//10
// function fn(){
//     console.log("line number 9",varName);//und
//     var varName=20;
//    b();
//    console.log("line number 13",varName);//20
// }
// fn();

var a=10;
console.log("l2",a);//l2 10
function fn(){
    console.log("l4",a);//l4 uf
     var a=20;
    a++;//21
    console.log("l7",a);//l7 21
    if(a){
        var a =30;
        a++;
        console.log("l11",a);//l11 31
    }
    console.log("l3",a);//l3 21 yahan galti hai
}
fn();
console.log("l2",a);//l2 10






// console.log("a",a);//a undedfined
// var a;
// console.log("a",a);//a undefined
// a=5;
// console.log("a",a);//a 5
// fn();//in fn
// function fn(){
//     console.log("in fn");
// }
// fn();//in fn
// fn1();// error
// var fn1=function () {
//     console.log("in fn1");
// }
// fn1();//in fn1

