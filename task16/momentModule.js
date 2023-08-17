//импортируем moment
const moment = require('moment');
//функция форматирования заданной даты
function formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
//функция получения текущей даты
function getCurrentDate() {
    return moment().format('DD-MM-YYYY');
}
//экспорт функнций
module.exports = {
    formatDate,
    getCurrentDate
};