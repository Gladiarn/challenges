function finalValueAfterOperations(operations: string[]): number {

    let finalValue = 0;

    for (let i = 0; i < operations.length; i++) {

        if (operations[i].includes('+')) {
            finalValue++
        }else{
            finalValue--;
        }
    }

    return finalValue

};

console.log(finalValueAfterOperations(["--X","X++","X++"]))