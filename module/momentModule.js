function formatDate(date) {
    return window.moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

// Функция получения текущей даты
function getCurrentDate() {
    return window.moment().format('DD-MM-YYYY');
}

export { formatDate, getCurrentDate };