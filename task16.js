import { formatDate, getCurrentDate } from './task16/momentModule.js'; // Укажите правильный путь

const myDate = new Date('2023-08-10');
const formattedDate = formatDate(myDate);
console.log('Форматированная дата:', formattedDate);

const currentDate = getCurrentDate();
console.log('Текущая дата:', currentDate);