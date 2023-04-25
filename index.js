
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.5)); // 5
console.log(Math.trunc(4.555423)); // 4 
console.log(Math.sign(0)); // 0 for 0, 1 for +ve, -1 -ve
console.log(Math.pow(2,10));
console.log(Math.sqrt(15));
console.log(Math.abs(-4.5235235));

const PI=Math.PI;

console.log(Math.sin(45*PI/180));

console.log(Math.max(1,2,3,432,53,42,4,14,2,2142));
// same for min

// important
let a=Math.random(); // it give value 0 to 1
console.log(a); 

// between 5 to 15
a= a*10 + 5 ;
// (0,10) + 5= (5,15) is answer
console.log(a);

console.log(Math.log2(15));

//date

const date=new Date();
console.log(date);
console.log(date.getDate());

const hed=new Date(2012,11,12);
console.log(hed);