// cоздаём класс для связного списка
class ListNode {
    constructor(value) {
      this.value = value;//текущее значение элемента
      this.next = null;//ссылка на следующий элемент или null
    }
}
  
function jsonToLinkedList(json) {
    let objects = JSON.parse(json);//парсим строку
    const head = new ListNode(objects[0]);//записываем первый элемент, чтобы потом вернуть его
    let currentNode = head;//переменная для записи новых узлов
    for (let i = 1; i < json.length; i++) {
        currentNode.next = new ListNode(objects[i]);
        currentNode = currentNode.next;
    }

    return head;//возвращаем первый элемент
}


let json = '[{"data": 1}, {"data": 2}, {"data": 3}]';
let linkedList = jsonToLinkedList(json);

// console.log(linkedList);