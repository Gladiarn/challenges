// Medium

function reverse(x: number): number {
  let chars: string[] = [];
  chars = x.toString().split("");

  let reversedChar = 0;
  if(x < 0){
    chars.shift();
    reversedChar = Number(chars.reverse().join('')) * -1;
  }else{
    reversedChar = Number(chars.reverse().join(''));
  }

  
  return reversedChar > -2147483648 && reversedChar < 2147483648 ? reversedChar : 0
}

console.log(reverse(-120))
