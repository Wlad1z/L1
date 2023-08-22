let recursionCount = 0;

localStorage.clear()

function recursiveWrite() {
    recursionCount++;
    document.write(`Рекурсивный вызов ${recursionCount}<br>
    <script>recursiveWrite();</script>`);
}

recursiveWrite();

