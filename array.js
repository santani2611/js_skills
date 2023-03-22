// let arr=[1,2,3,5.67]
//  arr.prop="nacho";

//  arr.run= function(){
//     console.log("mei hoon don");
//  }

//  console.log(arr);
//  arr.run();
//  for(let key in arr)
//  {
//      console.log(key+" : "+arr[key])
//  }
 //toh js mei arrays nhi hote, arrays bhi objects hai 
 //isliye const array pe shift() kaam karta hai
 //kyuki stack array ka refernce store hota hai
 //heappe uss reference mei saari value
 //arrays ke ek hi reference mei saai values key : value jaise stor hoti hai
 //kyunki array object hai
 //arr.shift mei bas 1 st key uda dete ha
 //reference change nhi hota

 //functions bhi obj hote hai
 function fn(){
    console.log("Nacho dosto");
 }
fn.prop="don"
fn.fun=function(){
    console.log("key")
}
console.log(fn);
//yahan functionfn ko ek obj k=jaise use kiya
for(let key in fn){
    console.log(key+":"+fn[key]);
}
// js mei sirf do hi chize hoti hai primitive ya objects
// primitive bas 6 chize hai
// number,string,boolean,undefined,null,symbol