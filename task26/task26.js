const parent = document.getElementById('parent')

function traverseDOM(element) {
    
    console.log(element);

    // обходим всех детей элемента
    for (let i = 0; i < element.children.length; i++) {
        traverseDOM(element.children[i]);
    }
}


traverseDOM(parent);