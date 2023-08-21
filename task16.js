//импорт модуля
import { formatDate, getCurrentDate } from "./task16/momentModule";


const myDate = new Date('2023-08-10');
const formattedDate = formatDate(myDate);
console.log('Форматированная дата:', formattedDate);

const currentDate = getCurrentDate();
console.log('Текущая дата:', currentDate);

//вводим в консоле node.js путь к этой папке и node task16.js