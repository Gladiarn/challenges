function FirstFactorial(num:number) { 
let sum = 0;
let firstLoop = true;
  for(let i = num; i > 1; i--){
    if(firstLoop){
      sum  = i * (i-1);
      firstLoop = false;
      continue
    }
    sum = sum * (i - 1);
  }

return sum;

}
   
// keep this function call here 
console.log(FirstFactorial(5));