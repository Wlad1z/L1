import { moment } from "https://wlad1z.github.io/L1/module/moment.js"; // Укажите правильный путь к moment.js

// Функция форматирования заданной даты
function formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

// Функция получения текущей даты
function getCurrentDate() {
    return moment().format('DD-MM-YYYY');
}

export { formatDate, getCurrentDate };