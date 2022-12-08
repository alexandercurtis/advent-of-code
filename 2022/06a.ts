const text = await Deno.readTextFile("inputs/06.txt");
const startTime = performance.now();

for(let i = 3; i < text.length; i++ ) {
  if (text[i] !== text[i - 1] && text[i] !== text[i - 2] && text[i] !== text[i - 3] && text[i - 1] !== text[i - 2] && text[i - 1] !== text[i - 3] && text[i - 2] !== text[i - 3]) {
    console.log(i+1);
    break;
  }
}

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
//1275
//0.5ms
