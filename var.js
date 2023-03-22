let a=10;
console.log("l2",a);//l2 10
function fn(){
    console.log("l4",a);//l4 uf
      a=20;
    a++;//21 
    console.log("l7",a);//l7 21 
    if(a){
        //console.log("ltttt",a);//
        let a =30;
        a++;//31
        console.log("l11",a);//l11 31
    }
    console.log("l3",a);//l3 21 yahan galti hai
}
fn();
console.log("l2",a);//l2 10
