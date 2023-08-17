//импорт модуля
const momentModule = require('./task16/momentModule');

const myDate = new Date('2023-08-10');
const formattedDate = momentModule.formatDate(myDate);
console.log('Форматированная дата:', formattedDate);

const currentDate = momentModule.getCurrentDate();
console.log('Текущая дата:', currentDate);

//вводим в консоле node.js путь к этой папке и node task16.js