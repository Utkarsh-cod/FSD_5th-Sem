const a = [1,2,3,4,5,6,7,8,9,];
const b = a.filter(i => i%2==0);
console.log("even=",b);
const c=b.map(i => i*i);
console.log("square=",c);
const d = c.reduce((acc,i) => acc+i,0);
console.log("sum=",d);