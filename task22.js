let recursionCount = 0;

function recursiveWrite() {
    recursionCount++;
    document.write(`Recursive Call ${recursionCount}<br>`);
    recursiveWrite();
}

// recursiveWrite();

//количество выполнений вложенных вызовов в document.write в document.write обусловлеенно размером колл стека браузера