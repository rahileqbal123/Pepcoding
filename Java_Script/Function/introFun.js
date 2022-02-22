function sayHi(param){
    console.log("Hi I am function");
    console.log("Hi I am parameter", param);
    let rval = Math.random()>0.5?true:"I am false"
    return rval;
}
sayHi(5);
sayHi([1,2,3,4,5,6]);
sayHi("I am String");
let rval = sayHi(10.2);
console.log(rval);

