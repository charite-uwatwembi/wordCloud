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
sorted.sort((a, b) => result[b] - result[a]);

const newValue = sorted.slice(0, 12)

newValue.forEach((word, index) => {
    const fontSize = 64 - index * 4; 
    const span = document.createElement("span");
    span.textContent = word;
    span.style.cssText = `
        font-size: ${fontSize}px; 
        margin: 10px; 
        display:flex;
        justify-content: center;
        align-items: center;
        transform: rotate(${(Math.random() - 0.5) * 30}deg);
        color: hsl(${Math.random() * 360}, 70%, 50%);
        
        `;
    cloud.appendChild(span);
})







