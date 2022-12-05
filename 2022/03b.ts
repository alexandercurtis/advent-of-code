const text = await Deno.readTextFile("inputs/03.txt");
const startTime = performance.now();
let total = 0;
let member = 0;
let rucksack = [new Set(), new Set(), new Set()];
for (const l of text.split("\n")) {
  const len = l.length;
  let i;
  for (i = 0; i < len; i++) {
    const item = l[i];
    rucksack[member].add(item);
  }
  member++;
  if (member === 3) {
    member = 0;
    for (const item of rucksack[0]) {
      if (rucksack[1].has(item) && rucksack[2].has(item)) {
        const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(item) + 1;
        total += priority;
        break;
      }
    }
    rucksack = [new Set(), new Set(), new Set()];
  }
}
console.log(`total ${total}`);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 2444
// 1.0ms
