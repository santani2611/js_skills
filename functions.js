//function ke liye memory program run hone se pehle hi ban jati hai global execution context mei
//kyunki functions ki js mei hoisting hoti hai
//functions js mei 1st class citizens hote hai
//yani tum functions ko as a arg dusre functions ko pass kar saakte ho
//functions ko agar kisi variable to assign kar diya jaye
// to wo function exp hota hai aur variable ke naam se aap uss func ko call kar sakte ho
//a() ek function expression hai
//functions tabhi execute honge jab unhe call kiya gya ho
//bina bulaye mehmaan wo nhi hai
//matlab jab tak bulaoge nhi chalengr nhi
//functions  ko dusre functions se return bhi kar sakte ho
function sayHello(banda){
    console.log("hello javascript! help me know you!",banda);//hello javascript! help me know you! undefined
    return 'nacho';
}
let ans=sayHello();//
console.log(ans);//nacho

let a=function (b)
{
    return (b%2==0);
}
console.log(a(11));//false

function f(para){
    console.log("bacche mann ke kache",para)//bacche mann ke kache uf
}
console.log(f());//undefined
