const text = await Deno.readTextFile("inputs/02.txt");
const startTime = performance.now();
let total = 0;
for (const l of text.split("\n")) {
  if (l) {
    const [elf, outcome] = l.split(' ');
    let score = 0;
    if (outcome === 'X') {
      score = elf === 'A' ? 3 : elf === 'B' ? 1 : 2;
    } else if (outcome === 'Y') {
      score = elf === 'A' ? 1 : elf === 'B' ? 2 : 3;
    } else {
      score = elf === 'A' ? 2 : elf === 'B' ? 3 : 1;
    }
    total += outcome === 'X' ? 0 : outcome === 'Y' ? 3 : 6;
    total += score;
  }
}
console.log(`total ${total}`);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 12725
// 1.3ms
