function calculateLocalStorageMemory() {
    const add = document.querySelector('.add');
    if (add){
        add.remove();
    }

    const localStorageSize = JSON.stringify(localStorage).length;
    createSimpleElement('Задание 20',`Объем занятой памяти / максимальный размер хранилища: ${localStorageSize / 1024 / 1024} / ${calculateAvailableStorage()} MB`);
}