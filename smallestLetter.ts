function nextGreatestLetter(letters: string[], target: string): string {

    let sorted = letters.sort((a,b)=> a.localeCompare(b));
    for (let i = 0; i < sorted.length; i++) {
        if(i == sorted.length - 1){
            return sorted[i] > target ? sorted[i] : sorted[0];
        }

        if(sorted[i] > target){
           if (sorted[i] > sorted[i+1]) {
                console.log('greater than next')
                continue
           }

           return sorted[i]
           
        } 
        continue
        
    }
};

console.log(nextGreatestLetter(["x","x","y","y"], "z"))