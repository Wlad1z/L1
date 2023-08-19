let recursionCount = 0;

function recursiveWrite() {
    recursionCount++;
    console.log(`Номер вызова: ${recursionCount} `);
    document.write(`<br><script> recursiveWrite();</script>`);
    
}

// recursiveWrite();

//количество выполнений вложенных вызовов в document.write в document.write обусловлеенно размером колл стека браузера