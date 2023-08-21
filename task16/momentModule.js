
// Функция форматирования заданной даты
function formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

// Функция получения текущей даты
function getCurrentDate() {
    return moment().format('DD-MM-YYYY');
}

