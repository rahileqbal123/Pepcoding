let number = 22;
let flag = true;
for(let i = 2; i*i <= number; i++){
    if(number%i==0){
        flag = false;
    }
}
if(flag){
    console.log(number, "is prime number");
}else{
    console.log(number,"is not prime number")
}