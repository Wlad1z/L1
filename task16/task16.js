import { formatDate, getCurrentDate } from '../module/momentModule.js';

const myDate = new Date('2023-08-10');
const formattedDate = formatDate(myDate);
createSimpleElement("", 'Форматированная дата: ' + formattedDate);

const currentDate = getCurrentDate();
createSimpleElement("", 'Текущая дата: ' + currentDate);
