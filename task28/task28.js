function createAndAppendElement() {
    const template = document.getElementById('myTemplate');
    const templateContent = template.content.cloneNode(true);

    // Добавляем клон содержимого шаблона в DOM
    const parentElement = document.getElementById('parent');
    parentElement.appendChild(templateContent);
}

