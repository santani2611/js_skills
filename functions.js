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
let ans=sayHello();//isme sayhello() ko call kiya bina koi para pass kiye toh para uf hoga
console.log(ans);//isme sayHello() ki return value jo ki ek string hai nacho print hogi

let a=function (b)//ye ek function expresion hai yahan function ka koi nam nhi hai isiye function anonymous hai 
{
    //a jo ki variable ka naam hai usi naam se function ko call kar sakte ho
    return (b%2==0);
}
console.log(a(11));// variable ke naam se function ko call kiya

function f(para){
    console.log("bacche mann ke kache",para)//bacche mann ke kache uf
}
console.log(f());//f() kuch return nhi karta isliye uf print hoga
