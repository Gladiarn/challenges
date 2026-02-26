function isPalindrome(x: number): boolean {
    if(x < 0){return false}
    const original:string  = x.toString();
    const palindrome = x.toString().split('').reverse().join('');
    console.log(palindrome)
    console.log(original)
    return original === palindrome ? true : false;

};

console.log(isPalindrome(121))