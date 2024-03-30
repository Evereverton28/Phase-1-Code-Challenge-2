function swapCase(str) {
    let letters = str.split('');
    return letters.map(letter =>
        (letter === letter.toUpperCase()) ?
        letter.toLowerCase() : letter.toUpperCase()
    ).join('');
}

let output = swapCase("The Quick Brown Fox");
console.log(output); 
