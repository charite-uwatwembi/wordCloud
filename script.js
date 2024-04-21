const paragraph = document.getElementById("myParagraph");
const cloud = document.getElementById("myWordCloud")
const text = paragraph.textContent;


function removeCommasAndDots(str) {
    return str.split('').filter(char => char !== ',' && char !== '.').join('');
}

const ourText = removeCommasAndDots(text);
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

let sorted = Object.keys(result);
sorted.sort((a, b) => b[1] - a[1]);

const newValue = sorted.slice(0, 12)

console.log(newValue);


newValue.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word
    
    cloud.appendChild(span)
    span.style.cssText = `display: flex`
    console.log(span)
   
})






