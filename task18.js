function calculateAvailableStorage() {
    // переменные для хранения данных
    let totalData; 
    let testData;

    try {
        testData = 'a'.repeat(1024 * 8); // 8KB
        totalData = testData;

        while (true) {
            localStorage.setItem('testData', totalData);
            totalData += testData; //записываем по MB в переменную пока catch не поймает ошибку
        }
    } catch (error) {
        //проверяем это ошибка переполнения хранилища
        if (error.name === 'QuotaExceededError') {
            //выводим размер хранилища
            const currentDataSize = (totalData.length - testData.length) / (1024 * 1024);
            console.log(`Максимальный размер localStorage : ${currentDataSize.toFixed(2)} MB`);
        } else {
            console.error('Error:', error);
        }
    }
}

// calculateAvailableStorage();