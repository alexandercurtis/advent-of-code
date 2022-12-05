const text = await Deno.readTextFile("inputs/02.txt");
const startTime = performance.now();
let total = 0;
for (const l of text.split("\n")) {
  if (l) {
    const [elf, you] = l.split(' ');
    const win = elf === 'A' && you === 'Y' ||
      elf === 'B' && you === 'Z' ||
      elf === 'C' && you === 'X';
    const draw = elf === 'A' && you === 'X' ||
      elf === 'B' && you === 'Y' ||
      elf === 'C' && you === 'Z';
    total += you === 'X' ? 1 : you === 'Y' ? 2 : 3;
    total += win ? 6 : draw ? 3 : 0;
  }
}
console.log(`total ${total}`);

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 11603
// 1.4ms
