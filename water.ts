function numWaterBottles(numBottles: number, numExchange: number): number {
  let totalBottles: number = numBottles;
  let ownedBottles: number = numBottles;

  while (ownedBottles % numExchange !== ownedBottles) {
    totalBottles += Math.floor(ownedBottles / numExchange);
    ownedBottles = Math.floor(ownedBottles / numExchange) + (ownedBottles % numExchange);
    console.log(totalBottles);
    console.log(ownedBottles);
  }

  return totalBottles;
}

console.log(numWaterBottles(4, 4));
