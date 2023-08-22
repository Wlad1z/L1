import {getDeclension} from "../module/functionTask4.js";
import {createSimpleElement} from "../module/createSimpleElementExport.js";


const words = ["сообщение", "сообщения", "сообщений"];
const result = getDeclension(12345, words);
const result1 = getDeclension(123, words);
const result2 = getDeclension(1, words);

createSimpleElement('Задание 4', (result+"<br>"+result1+"<br>"+result2));