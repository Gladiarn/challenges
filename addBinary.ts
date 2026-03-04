function addBinary(a: string, b: string): string {
    
    let convertedNum1:number = parseInt(a,2);
    let convertedNum2:number = parseInt(b,2);

    return (convertedNum1 + convertedNum2).toString(2);

};

console.log(addBinary("11", "1"));