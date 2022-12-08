const text = await Deno.readTextFile("inputs/06.txt");
const startTime = performance.now();

let startOfMarker = 0;
for (let i = 0; i < text.length; i++) {
    const c = text[i];
    for (let j = startOfMarker; j < i; j++) {
        if (text[j] === c) {
            startOfMarker = j + 1;
            break;
        }
    }
    if (i+1 - startOfMarker === 14) {
        console.log(i+1);
        break;
    }
}

const endTime = performance.now();
console.log(`took ${endTime - startTime}`);
// 3605
// 0.7ms