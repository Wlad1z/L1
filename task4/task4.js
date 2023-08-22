import {getDeclension} from "../module/functionTask4.js"
import {createSimpleElement} from "../module/createSimpleElement.js"

const number = 12454;
const words = ["сообщение", "сообщения", "сообщений"];
const result = getDeclension(number, words);

createSimpleElement('Задание 4', result);