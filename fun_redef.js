// what will be the output if the same function is declared many times?
//the output will be the output of the lastfunction as everytime the functions are hoisted and their memory is allocated
//before code so when first memory is created for 1st am , it points to suppose 8k location,
//when for second am(), it notices it is same function am redefined so it allots memory say 6k, now am functions is at 6k
// when third am , same logic as 2nd, am() points to new memory createdfor third say 3k
// now no matter where you call am(), be it before the declaration opf 1 st func, or before 2nd or before 3rd or after 3rd,
//it will always execute the last one.
//am();
function am(){
    console.log("i");
}
//am();
function am(){
    console.log("am");
}
//am();
function am(){
    console.log("buddha");
}
am();
