function createSimpleElement (task, text){
    const div = document.createElement('div');
    div.innerHTML = `<h3>${task}</h3>
        <p>${text}</p>`;
    div.classList.add('add');
    document.body.appendChild(div);
}
