function sortByBits(arr: number[]): number[] {
    return arr.sort((a, b) => {
        const countA = a.toString(2).split('').reduce((acc, curr) => curr === '1' ? acc + 1 : acc, 0)
        const countB = b.toString(2).split('').reduce((acc, curr) => curr === '1' ? acc + 1 : acc, 0)
        if (countA == countB) { return a-b} else {
            return countA - countB
        }
    })
};

console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]))

