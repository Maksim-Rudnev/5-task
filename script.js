console.time('Time');
let remainder = 1;
let num = 0;
while(remainder) {
    num+=2520;
    for(j = 3; j < 21; j++){
        remainder = num % j;
        if(remainder)break;
    }
}
console.log(num);
console.timeEnd('Time');