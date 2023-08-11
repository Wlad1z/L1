class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function jsonToLinkedList(json) {
    if (!Array.isArray(json)) {
        throw new Error('Input JSON should be an array of objects.');
    }

    if (json.length === 0) {
        return null;
    }

    const head = new ListNode(json[0]);
    let currentNode = head;

    for (let i = 1; i < json.length; i++) {
        currentNode.next = new ListNode(json[i]);
        currentNode = currentNode.next;
    }

    return head;
}

// Пример входного JSON
const inputJSON = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
];

const linkedList = jsonToLinkedList(inputJSON);
