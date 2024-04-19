
const paragraph = document.getElementById("myParagraph");
const text = paragraph.textContent;


const ourText = text.replace(/[,.]/g, "");
const words = ourText.split(/\s+/);


const result = {};

words.forEach(word => {
    const lowercaseWord = word.toLowerCase();

    if (result[lowercaseWord]) {
        result[lowercaseWord]++;
    } else {
        result[lowercaseWord] = 1;
    }
    
});


let sorted = Object.entries(result)
    sorted.sort((a, b) => b[1] - a[1]);

console.log(sorted.slice(0, 12))













