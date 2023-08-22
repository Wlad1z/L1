function getDeclension(number, words) {
    const cases = [2, 0, 1, 1, 1, 2]; //массив с соответствующими формами слова
    
    let wordIndex;

    if (number % 100 > 4 && number % 100 < 20) {
        wordIndex = 2; // числа от 5 до 20
    } else {
        const lastDigit = number % 10;
        const casesIndex = Math.min(lastDigit, 5); // остальные числа
        wordIndex = cases[casesIndex];
    }

    const word = words[wordIndex];
    
    return `${number} ${word}`;
}
export {getDeclension}