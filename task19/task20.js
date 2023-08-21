function calculateLocalStorageMemory() {
    const localStorageSize = JSON.stringify(localStorage).length;
    console.log(`Объем занятой памяти / максимальный размер хранилища: ${localStorageSize / 1024 / 1024} / 5 MB`);
}