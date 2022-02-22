let number = 20;
for(let i = 1; i<=number; i++){
    let flag = true;
    for(let j = 2; j<i; j++){
        if(i%j == 0){
            flag = false;
        }
    }
    if(flag){
        console.log(i);
    }
}