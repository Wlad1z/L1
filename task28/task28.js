function createAndAppendElement() {
    const template = document.getElementById('myTemplate');
    const templateContent = template.content.cloneNode(true);

    // добавляем клон содержимого шаблона в DOM
    const parentElement = document.getElementById('parent');
    parentElement.appendChild(templateContent);
}

